---
tag: BCBR5VJHGM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cycling group that has $4n$ members will have several cycling events, such that:
a) Two cycling events are done every week; once on Saturday and once on Sunday.
b) Exactly $2n$ members participate in any cycling event.
c) No member may participate in both cycling events of a week.
d) After all cycling events are completed, the number of events where each pair of members meet is the same for all pairs of members.
Prove that after all cycling events are completed, the number of events where each group of three members meet is the same value $t$ for all groups of three members, and that for $n \ge 2$, $t$ is divisible by $n-1$.
