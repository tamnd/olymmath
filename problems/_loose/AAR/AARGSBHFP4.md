---
tag: AARGSBHFP4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/2000
    source: hf-numinamath-1-5
    label: LI OM - I - Problem 11
---
Given a positive integer $ n $ and a set $ M $, consisting of $ n^2 + 1 $ different positive integers and having the following property: among any $ n+1 $ numbers chosen from the set $ M $, there is a pair of numbers, one of which divides the other. Prove that in the set $ M $ there exist distinct numbers $ a_1, a_2, \ldots, a_{n+1} $ satisfying the condition: for $ i = 1,2,\ldots,n $, the number $ a_i $ divides $ a_{i+1} $.
