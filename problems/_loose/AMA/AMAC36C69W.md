---
tag: AMAC36C69W
kind: problem
type: answer
answer: 1,1\cdot2,2^{2},2\cdot3,3^{2},\ldots,n^{2},n(n+1),(n+1)^{2},\ldots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist an infinite increasing sequence of integers in which each element with an odd index (starting from the third) is the arithmetic mean, and each element with an even index is the geometric mean of its neighboring elements?
