---
tag: APP3CQYE28
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2537480
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48611
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244524
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Mongolian Mathematical Olympiad
---
Given distinct prime numbers $p_1,\ldots,p_s$ and a positive integer $n$ , find the number of positive integers not exceeding $n$ that are divisible by exactly one of the $p_i$ .
