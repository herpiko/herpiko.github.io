---
layout: post
title: Recovering MongoDB Database from Oplog
date: 2017-01-30 00:01:00.000000000 +07:00
type: post
published: true
status: publish
categories:
- blog
tags: []
---

Shit happens occasionally. Last week, a MongoDB replication pair (master-slave) on production losts its databases. According to the investigation result, it caused by power failure that happened too often which lead to storage corruption. If the power failure happens while the replication set still syncing the oplog (operation logs), the database will be corrupted and MongoDB will drop it, without confirmation. The last backup managed at May 2015. Quite scary.

The log bellow is from master :

```
Tue Jan 17 16:56:31.800 [conn997] end connection slave:54531 (2 connections now open)
Tue Jan 17 16:56:31.813 [initandlisten] connection accepted from slave:54532 #998 (3 connections now open)
Tue Jan 17 16:56:34.102 [initandlisten] connection accepted from 95.211.153.138:47214 #999 (4 connections now open)
Tue Jan 17 16:56:36.381 [conn999] dropDatabase basisdata starting
Tue Jan 17 16:56:36.383 [conn999] removeJournalFiles
Tue Jan 17 16:56:36.933 [conn999] dropDatabase basisdata finished
Tue Jan 17 16:56:36.940 [conn999] command basisdata.$cmd command: { dropDatabase: 1.0 } ntoreturn:1 keyUpdates:0 locks(micros) W:558806 reslen:60 558ms
Tue Jan 17 16:56:37.225 [conn999] dropDatabase local starting
Tue Jan 17 16:56:37.261 [conn999] removeJournalFiles
Tue Jan 17 16:56:37.327 [conn999] dropDatabase local finished
Tue Jan 17 16:56:37.327 [conn999] command local.$cmd command: { dropDatabase: 1.0 } ntoreturn:1 keyUpdates:0 locks(micros) W:101854 reslen:56 101ms
Tue Jan 17 16:56:37.958 [conn3] getMore: cursorid not found local.oplog.rs 65856224222618
Tue Jan 17 16:56:37.976 [conn3] end connection slave:53578 (3 connections now open)
Tue Jan 17 16:56:38.184 [FileAllocator] allocating new datafile /var/lib/mongodb/WARNING.ns, filling with zeroes...
Tue Jan 17 16:56:38.184 [FileAllocator] creating directory /var/lib/mongodb/_tmp
Tue Jan 17 16:56:38.235 [FileAllocator] done allocating datafile /var/lib/mongodb/WARNING.ns, size: 16MB,  took 0.016 secs
Tue Jan 17 16:56:38.243 [FileAllocator] allocating new datafile /var/lib/mongodb/WARNING.0, filling with zeroes...
Tue Jan 17 16:56:38.260 [FileAllocator] done allocating datafile /var/lib/mongodb/WARNING.0, size: 64MB,  took 0.017 secs
Tue Jan 17 16:56:38.261 [FileAllocator] allocating new datafile /var/lib/mongodb/WARNING.1, filling with zeroes...
Tue Jan 17 16:56:38.261 [conn999] build index WARNING.WARNING { _id: 1 }
Tue Jan 17 16:56:38.269 [conn999] build index done.  scanned 0 total records. 0.008 secs
Tue Jan 17 16:56:38.270 [conn999] Assertion: 13347:local.oplog.rs missing. did you drop it? if so restart server
0xa6d3c6 0xa3fd3d 0xa23c4c 0x81cd2b 0x817bcd 0x7c3be1 0x7c8ed0 0x7ca5d6 0x5922ea 0xa544b1 0x7f0a5c5310a4 0x7f0a5a66c87d
Tue Jan 17 16:56:38.299 [FileAllocator] done allocating datafile /var/lib/mongodb/WARNING.1, size: 128MB,  took 0.038 secs
 /usr/bin/mongod(_ZN5mongo15printStackTraceERSo+0x26) [0xa6d3c6]
 /usr/bin/mongod(_ZN5mongo10logContextEPKc+0xfd) [0xa3fd3d]
 /usr/bin/mongod(_ZN5mongo11msgassertedEiPKc+0x9c) [0xa23c4c]
 /usr/bin/mongod() [0x81cd2b]
 /usr/bin/mongod(_ZN5mongo5logOpEPKcS1_RKNS_7BSONObjEPS2_Pbb+0x3d) [0x817bcd]
 /usr/bin/mongod(_ZN5mongo14checkAndInsertEPKcRNS_7BSONObjE+0x131) [0x7c3be1]
 /usr/bin/mongod(_ZN5mongo14receivedInsertERNS_7MessageERNS_5CurOpE+0x5e0) [0x7c8ed0]
 /usr/bin/mongod(_ZN5mongo16assembleResponseERNS_7MessageERNS_10DbResponseERKNS_11HostAndPortE+0x1586) [0x7ca5d6]
 /usr/bin/mongod(_ZN5mongo16MyMessageHandler7processERNS_7MessageEPNS_21AbstractMessagingPortEPNS_9LastErrorE+0xba) [0x5922ea]
 /usr/bin/mongod(_ZN5mongo17PortMessageServer17handleIncomingMsgEPv+0x471) [0xa544b1]
 /lib/x86_64-linux-gnu/libpthread.so.0(+0x80a4) [0x7f0a5c5310a4]
 /lib/x86_64-linux-gnu/libc.so.6(clone+0x6d) [0x7f0a5a66c87d]
Tue Jan 17 16:56:38.301 [conn999] insert WARNING.WARNING keyUpdates:0 exception: local.oplog.rs missing. did you drop it? if so restart server code:13347 locks(micros) w:147507 116ms

```

And this is from slave :

```
Tue Jan 17 16:55:36.957 [initandlisten] connection accepted from master:41189 #573081 (6 connections now open)
Tue Jan 17 16:56:07.157 [conn573081] end connection master:41189 (5 connections now open)
Tue Jan 17 16:56:07.169 [initandlisten] connection accepted from master:41191 #573082 (6 connections now open)
Tue Jan 17 16:56:36.965 [repl writer worker 2] dropDatabase basisdata starting
Tue Jan 17 16:56:37.040 [repl writer worker 2] removeJournalFiles
Tue Jan 17 16:56:37.371 [conn573082] end connection master:41191 (5 connections now open)
Tue Jan 17 16:56:37.388 [initandlisten] connection accepted from master:41192 #573083 (6 connections now open)
Tue Jan 17 16:56:37.971 [rsBackgroundSync] repl: old cursor isDead, will initiate a new one
Tue Jan 17 16:57:07.604 [conn573083] end connection master:41192 (5 connections now open)
Tue Jan 17 16:57:07.616 [initandlisten] connection accepted from master:41193 #573084 (6 connections now open)
Tue Jan 17 16:57:12.445 [repl writer worker 2] dropDatabase basisdata finished
Tue Jan 17 16:57:12.446 [rsBackgroundSync] replSet syncing to: primer:27017
Tue Jan 17 16:57:12.484 [rsBackgroundSync] replSet sync source problem: 1000 replSet source for syncing doesn't seem to be await capable -- is it an older version of mongodb?
Tue Jan 17 16:57:12.503 [rsBackgroundSync] replSet syncing to: primer:27017
```

The team splitted to two, investigation and recovery. I was in recovery part, alone.

The first thing that flying in my mind when database got flushed and need to be recovered is stopping the service then finding any `big` files around. I simply do `du -hs /var/lib/mongodb` on both master and slave. The master has no hope but slave has quite huge size, around 22GB. They are files that named local.0, local.1, and so on. What is their purposes?

I copied all the files under `var/lib/mongodb` to isolated environment (Docker). I managed to run an instance of MongoDB with the copied database files then enter the mongo shell.

It has a database named local, with some collections. I counted the documents in each collections and `oplog.rs` has the most items, more than 900000 documents.

The doc looks like this :

```
{
  "ts": Timestamp(1462635333, 12646),
  "h": NumberLong("-9088484139601204321"),
  "v": 2,
  "op": "i",
  "ns": "basisdata.import",
  "o": {
    "id": 1462635222048,
    "type": "p",
    "data": {
      "NAMA_LGKP": "-------------",
      "ALAMAT": "-------------",
    },
    "_id": ObjectId("572e0b3e1116738144bf45eb")
  }
}
```

Nah, it's the data that we seeked. `op` in  the doc means operation, the are consist of insert, update and delete. Oplog is stands for operation log, where any operation in master  that needed to be synced in slave stored. All the slave replset has oplogs.

Then I looked at to the range of timestamp :

```
> use local
switched to db local
> db.oplog.rs.find().sort({ts : 1}).limit(1)
{ "ts" : Timestamp(1462635333, 12646), "h" : NumberLong("-9088484139601204321"), "v" : 2, "op" : "i", "ns" : "basisdata.import", "o" : { "id" : 1462635222048, "type" : "p", "data" : { "NAMA_LGKP" : "----") }, "_id" : ObjectId("572e0b3e1116738144bf45eb") } }
> db.oplog.rs.find().sort({ts : -1}).limit(1)
{ "ts" : Timestamp(1485187231, 1), "h" : NumberLong("5020891137542662538"), "v" : 2, "op" : "u", "ns" : "basisdata.epr", "o2" : { "_id" : ObjectId("5880d47321e1a19014389954") }, "o" : { "id" : 1484838001848, "type" : "lp", "subType" : "l", "data" : {  "stage" : "done" }, "_id" : ObjectId("5880d47321e1a19014389954"), "hps" : 632.06 } }
>
```

The timestamp (it's UNIX timestamp, do `(new Date(1485187231 * 1000)).toString()` in NodeJS to get the human-readable value) said it begins at Mei 2016 and ended at Januari 2017. Luckily, it matched with the last backup. So I just need to recover this that then merge it to the last backup.

On normal condition, the oplog could be replayed using official MongoDB tools, but it gave error `oplog mode is only supported on full dumps`. I can't full-dump it since the master still being investigated. Both master and slave need to be up and connected when doing full-dump in replset.

So I created a simple script to replay all the oplog. Just exclude the culprit ( `{ op : { dropDatabase : 1 } }` ).

The script is in Javascript :

```
const async = require('async');
const Db = require('mongodb').Db, Server = require('mongodb').Server;
var db1 = new Db('local', new Server('localhost', 27017));
var db2 = new Db('basisdata', new Server('localhost', 27017));


db1.open(function(err, db1) {
  db2.open(function(err, db2) {

    const oplog = db1.collection('oplog.rs');
    var col = {}
    col['import'] = db2.collection('import');

    var count = 0;
    var q = async.queue((doc, cb) => {
      count++;
      var colName = doc.ns.split('.')[1];
      console.log(count + ' : ' + doc.o._id + ' on ' + colName);
      if (!col[colName]) {
        console.log('Collection doesnt exist');
        console.log(colName);
        process.exit();
      }
      if (doc.op == 'i') {
        col[colName].insert(doc.o, (err) => {
          if (err && err.message && err.message.indexOf('E11000') < 0 ) {
            console.log(err);
            process.exit();
          }
          cb();
        })
      } else if (doc.op == 'u') {
        col[colName].findOneAndUpdate({_id : doc.o._id}, doc.o, (err) => {
          if (err && err.message && err.message.indexOf('E11000') < 0 ) {
            console.log(err);
            process.exit();
          }
          cb();
        })
      } else if (doc.op == 'd') {
        col[colName].remove({_id : doc.o._id}, (err) => {
          if (err && err.message && err.message.indexOf('E11000') < 0 ) {
            console.log(err);
            process.exit();
          }
          cb();
        })
      } else {
        cb();
      }
    }, Infinity)

    q.drain = function() {
      if (cursor.isClosed()) {
        console.log('All items have been processed');
        db1.close();
        db2.close();
      }
    }

    var limit = new Date('2016/05/10'); // Tentukan limit waktunya

    var ts = new require('mongodb').Timestamp(0, Math.floor(limit.getTime() / 1000))
    var cursor = oplog.find ({ts : { '$gte' : ts  } });
    cursor.each((err, doc) => {
      if (err) throw err;
      if (doc) q.push(doc);
    })
  })
})
```

The recovered database restored to prod then we sync it again from start.

### Lesson learned

Backup anything daily!
