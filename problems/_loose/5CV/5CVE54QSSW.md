---
tag: 5CVE54QSSW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h3214745
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29209
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2024 Tournament of Towns
---
For every polynomial of degree 45 with coefficients $1,2,3, \ldots, 46$ (in some order) Tom has listed all its distinct real roots. Then he increased each number in the list by 1 . What is now greater: the amount of positive numbers or the amount of negative numbers?

Alexey Glebov
