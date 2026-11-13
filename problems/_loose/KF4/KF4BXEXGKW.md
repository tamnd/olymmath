---
tag: KF4BXEXGKW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3275420
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70117
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2018
    source: hf-ai-mo-aops
    label: 2018 BMT Spring
---
Alice and Bob are playing rock paper scissors. Alice however is cheating, so in each round, she has a $\frac35$ chance of winning, $\frac25$ chance of drawing, and $\frac25$ chance of losing. The first person to win $5$ more rounds than the other person wins the match. What is the probability Alice wins?
