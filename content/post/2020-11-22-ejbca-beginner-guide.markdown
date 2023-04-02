---
layout: post
title:  'EJBCA Beginner Guide: From CA to Certificate Enrollment'
date:   2020-11-22 00:00:00 +0700
categories: 
  - Tech
tags:
  - x509
  - PKI
  - EJBCA
---

X509 is a complicated thing and EJBCA makes it easier to grasp. Eww you may find EJBCA is complicated as well. This post will guide you to specific case as example: 

<blockquote>
CA that can issuing certificates for high education instutution. High education institution as end user can signing PDF files for their student certification.
</blockquote>

This post is not the best practice example but it can introduce you to how EJBCA works. Let's go.

## EJBCA Preparation on local environment

`docker-compose.yaml`:
~~~
version: '3'

services:
  db:
    image: postgres:13-alpine
    env_file: .env
    restart: always
    volumes:
     - ./data:/data

  ejbca:
    image: primekey/ejbca-ce:6.15.2.6
    env_file: .env
    restart: always
    ports:
      - 80:8080
      - 443:8443
    depends_on:
      - db
~~~

`.env`:
~~~
# EJBCA
TLS_SETUP_ENABLED=simple
DATABASE_USER=postgres
DATABASE_PASSWORD=kLTPk5Ty9K3JHykCS38YBHDTVwXkVCgjsQs7HaT8wwT5VcY5G54tMbSNt6uCEztM
DATABASE_JDBC_URL=jdbc:postgresql://db/postgres

# DB
POSTGRES_PASSWORD=kLTPk5Ty9K3JHykCS38YBHDTVwXkVCgjsQs7HaT8wwT5VcY5G54tMbSNt6uCEztM
PGDATA="/data"
~~~

Spin them up with `docker-compose up -d --force-recreate`. It'll take some minutes until EJBCA is ready to serve you.

Some notes:
- Add `127.0.0.1 ejbca` to your `/etc/hosts` as the ejbca declared itself on `ejbca` hostname/domain.
- Make sure you can access `https://ejbca/ejbca/adminweb/` without problem.

## Issuing Root CA

- On EJBCA Admin Web interface, go to CA Functions -> Certificate Authorities.
- On `Add CA` form, write your Root CA common name, e.g. `AgunoRootCA`, then click `Create`
- You'll be redirected to complicated form of issuing CA.
- Leave the default values as is except for:
  - CA Serial Number Octet Size: 20
  - Validity: set it to `10y`
  - Issuing Distribution Point on CRLs: Use
  - Default CA defined validation data: click all `Generate` buttons in this section, then change  the `localhost` strings to `ejbca`.
  - Monitor if CA active (healthcheck): Activate
- Then click `Create` button.
- At this point, you have two CAs:
  - ManagementCA
  - AgunoRootCA
  
## Issuing Intermediate CA
- Do the same again as above except:
  - The CA name is `AgunoIntermediateCA`
  - Leave the default values but set some values as above and:
    - CA Certificate Data, Signed By: AgunoRootCA
- At this point, you have three CAs:
  - ManagementCA
  - AgunoRootCA
  - AgunoIntermediateCA
  
## Preparing Certificate Profiles

Any attempt of issuing new certificate will require a certificate profile that define what kind of certificate that will be created. Let's assume that we want to create certificate profile for high education institutions and it will be used to signing `ijazah`. Let's name it HIGHEDUINSTITUTION. 

- On EJBCA Admin Web interface, go to CA Functions -> Certificate Profiles.
- At the end of the list, enter your profile name, `HIGHEDUINSTITUTION`, click `Add`
- It'll be added to the list, now click `Edit` button as we need to modify some values. IMPORTANT NOTE: If you want to multiple select some values, press and hold Shift button or the previous selected values will be loss. 
- Now please set some values on this field :
  - Available Key Algorithms: select ONLY `RSA`, we need to make it broadly compatible.
  - Available Bit Lengths: select ONLY `4096 bits`
  - Validity or end date of the certificate: `5y`
  - Extended Key Usage: Use, Critical, select ONLY `PDF Signing`
  - Available CAs: select ONLY AgunoIntermediateCA
- Click `Save` button

## Preparing End Entity Profile

Certificate Profile defines the technical aspects of the certificate. On the other hand, EEP defines the entity aspects that related to identity.

- Go to RA Functions -> End Entity Profiles
- On `Add Profile` form, type your profile name, e.g. `HIGHEDUINSTITUTION` (same as the certificate profile name), then click the `Add` button.
- After it added to the list, click the item then click `Edit End Entity Profile` button.
- You'll be redirected to (again) a complicated form. Leave it as is but modify some values:
  - Password: Required
  - Other subject attributes: Remove all attributes
  - Default Certificate Profile : `HIGHENDINSTITUTION`
  - Available Certificate Profiles: select ONLY `HIGHENDINSTITUTION`
  - Default CA: `AgunoIntermediateCA`
  - Available CAs: select ONLY `AgunoIntermediateCA`
  - Default Token: `P12`
  - Available Tokens: select ONLY `P12`
- Click save
- At this point, you have three CAs, a configured certificate profile and a configured entity profile. You're ready to enroll new certificate for education institutions.

## Let's try to issuing and enrolling a new certificate for education institution

- On EJBCA Web Admin interface, go to RA Functions -> Add End Entity
- On `End Entity Profile` field, select `HIGHEDUINSTITUTION`, the form will be adjusted according to our end entity profile configuration.
- Enter your entity information, e.g.:
  - Username: `ugmacid`
  - Password: enter the password for enrollment
  - E-mail address `administration@ugm.ac.id`
  - CN/Common name `ugmacid`
- Leave other values as is.
- Click `Add` button.

Let's enroll the certificate

- Go to https://ejbca/ejbca/, this is the public interface of the EJBCA instance.
- On `Enroll` section, click `Create Browser Certificate`
- Enter the username and Enrollment code (password)
- You'll be asked for confirmation, click `Enroll` button
- A P12 file will be downloaded to your computer, it's protected by passphrase. Use the password as passphrase.

At this point, you may check the new issued certificate against the certificate chain.

## Next post

I'll write about authentication, roles and security on maintaining EJBCA instance.
