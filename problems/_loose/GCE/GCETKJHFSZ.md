---
tag: GCETKJHFSZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Taiwan TST Round  2
    url: https://artofproblemsolving.com/community/c6h1790395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Taiwan TST Round  2
---
There are $n$ sheep and a wolf in sheep's clothing . Some of the sheep are friends (friendship is mutual). The goal of the wolf is to eat all the sheep. First, the wolf chooses some sheep to make friend's with. In each of the following days, the wolf eats one of its friends. Whenever the wolf eats a sheep $A$ :
(a) If a friend of $A$ is originally a friend of the wolf, it un-friends the wolf.
(b) If a friend of $A$ is originally not a friend of the wolf, it becomes a friend of the wolf.
Repeat the procedure until the wolf has no friend left.
Find the largest integer $m$ in terms of $n$ satisfying the following: There exists an initial friendsheep structure such that the wolf has $m$ different ways of choosing initial sheep to become friends, so that the wolf has a way to eat all of the sheep.
