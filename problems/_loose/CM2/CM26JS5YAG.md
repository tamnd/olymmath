---
tag: CM26JS5YAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Danube Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1331101
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13842
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2016
    source: hf-ai-mo-aops
    label: 2016 Danube Mathematical Olympiad
---
A bank has a set S of codes formed only with 0 and 1,each one with length n.Two codes are 'friends' if they are different on only one position.We know that each code has exactly k 'friends'.Prove that:
1)S has an even number of elements
2)S contains at least $2^k$ codes
