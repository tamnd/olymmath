---
tag: N82D5JRYJC
kind: problem
type: answer
answer: '[\log_2(n-1)+1]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1999
    source: hf-numinamath-1-5
    label: L OM - I - Problem 8
---
Given a natural number $ n \geq 2 $ and an $ n $-element set $ S $. Determine the smallest natural number $ k $ for which there exist subsets $ A_1, A_2, \ldots, A_k $ of the set $ S $ with the following property:
for any two distinct elements $ a, b \in S $, there exists a number $ j \in \{1, 2, \ldots, k\} $ such that the set $ A_j \cap \{a, b\} $ is a singleton.
