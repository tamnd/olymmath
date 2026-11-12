---
tag: P7DPGJW1YJ
kind: problem
type: answer
answer: n=2^kfork=1,2,3,\cdots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2009
    source: hf-numinamath-1-5
    label: LX OM - I - Task 2
---
Given an integer $ n \geq 2 $. Let $ r_1, r_2, r_3, \cdots, r_{n-1} $ be the respective
remainders of the division of numbers

by $ n $. Find all such values of $ n $ for which the sequence $ (r_1,r_2,\cdots,r_{n-1}) $ is a permutation
of the sequence $ (1, 2, \cdots,n-1) $.
