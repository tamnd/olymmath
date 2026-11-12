---
tag: N86PRHJZBF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h3300178
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2021
    source: hf-ai-mo-aops
    label: 2021 Belarusian National Olympiad
---
State consists of $2021$ cities, between some of them there are direct flights. Each pair of cities has not more than one flight, every flight belongs to one of $2021$ companies. Call a group of cities *incomplete*, if at least one company doesn't have any flights between cities of the group.
Find the maximum positive integer $m$ , so that one can always find an incomplete group of $m$ cities.
