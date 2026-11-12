---
tag: 7DEWYGQXR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1961 All Russian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1858251
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1961
    source: hf-ai-mo-aops
    label: 1961 All Russian Mathematical Olympiad
---
Nicholas and Peter are dividing $(2n+1)$ nuts. Each wants to get more. Three ways for that were suggested. (Each consist of three stages.) First two stages are common.

1 stage: Peter divides nuts onto $2$ heaps, each contain not less than $2$ nuts.
2 stage: Nicholas divides both heaps onto $2$ heaps, each contain not less than $1$ nut.
3 stage:

1 way: Nicholas takes the biggest and the least heaps.
2 way: Nicholas takes two middle size heaps.
3 way: Nicholas takes either the biggest and the least heaps or two middle size heaps, but gives one nut to the Peter for the right of choice.

Find the most and the least profitable method for the Nicholas.
