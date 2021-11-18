---
title:  "GitLab Productivity Tracking: Know How Your Team Breathing"
date:   2021-11-19 00:00:00 +0700
categories: productivity, management
---

How do I know if my team performs well? How to tell that with data? If we're underperformed or didn't meet the deadline, how to find the causes and tackle them? I was thinking about analyzing the entire activities in my team to get some insights, starting from GitLab issues.

I put some filters to the issues:
- Has been assigned to someone
- Has mentioned in (at least one) a merge request
- Has been closed
- The entire time spent (from open to closed) is less than two weeks (some issues were created as reference or documentation which sometimes took a bit long to be resolved)

For each, I fetch the:
- Notes, contains activities of the issue, including comments, assignments, etc. There is a timestamp for each assignment activity.
- Merge requests to the particular issue. They contain the timestamp of created and merged events which are very useful to get insight from the dev side.

From 500 issues sorted by the latest updated (by the boundaries above), they narrowed down to 113 issues.

By using this data, I could aggregate it to get the duration of the activities for each issue:
- From opened to closed, which represents the lifetime of an issue.
- From opened to picked by/assigned to someone.
- From assigned to the first merge request, which represents how long devs finished their jobs.
- From merge request creation to a merged event, which represents how long peer to peer review process and revisions (if any) take time.
- From merged to issue get closed, which represents how long the QA took over the issue and test them.

I wrote them into a single script: https://gist.github.com/herpiko/b5aa126e29f5f2ad15c4ff481bf5aee8. There is a lot more area to explore. Of course, this setup has some inaccuracy as there were so many things that happened in the team but let's see the early insight first, shall we?

<img src="/assets/gitlab-productivity-tracking-median.png"/>

<img src="/assets/gitlab-productivity-tracking-mean.png"/>

There were some bottlenecks:
- The developers took too long to get merge requests merged into our main branches. It's a bit tricky and has a trade-off. You can stop your coding session to help your coworker by reviewing their patches immediately then you get a costly context switch here. Or you can ignore it, let your job done first then take a look at the patches later which may impact the issue cycle a lot.
- QAs (which at the time they were also handling the other stuff) have a hard time testing it. The single issue should take less than an hour to test but the QAs have not picked it for days until they have time or until the deadline came nearer.

In the last step, let's gather the team and talk.
