---
tag: DW26JGR53F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h248884
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35905
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2007
    source: hf-ai-mo-aops
    label: 2007 China Team Selection Test
---
Find all positive integers $ n$ such that there exists sequence consisting of $ 1$ and $ - 1: a_{1},a_{2},\cdots,a_{n}$ satisfying $ a_{1}\cdot1^2 + a_{2}\cdot2^2 + \cdots + a_{n}\cdot n^2 = 0.$
