---
tag: VPBB4B3G6X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1440397
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15498
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2017
    source: hf-ai-mo-aops
    label: 2017 Hong Kong TST
---
Suppose all of the 200 integers lying in between (and including) 1 and 200 are written on a blackboard. Suppose we choose exactly 100 of these numbers and circle each one of them. By the *score* of such a choice, we mean the square of the difference between the sum of the circled numbers and the sum of the non-circled numbers. What is the average scores over all possible choices for 100 numbers?
