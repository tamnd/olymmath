---
tag: MRHP2C1PSB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2026 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h3723629
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2026
    source: hf-ai-mo-aops
    label: 2026 China National Olympiad
---
Let $n$ be a positive integer. Initially there are $n$ red cards and $n$ blue cards. One writes one 0 on every red card and one 1 on every blue card. An operation is to choose a red card and a blue card, such that the number on the red card is smaller than the number on the blue card, and then replace the two numbers by their arithmetic mean.

Determine the smallest $n$ such that it is possible to execute finitely many operations, so that the sum of the numbers on the red card is larger than $100$ .
