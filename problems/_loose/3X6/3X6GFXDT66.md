---
tag: 3X6GFXDT66
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1902957
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18874
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2020
    source: hf-ai-mo-aops
    label: 2020 Hong Kong TST
---
Given a list of integers $2^1+1, 2^2+1, \ldots, 2^{2019}+1$ , Adam chooses two different integers from the list and computes their greatest common divisor. Find the sum of all possible values of this greatest common divisor.
