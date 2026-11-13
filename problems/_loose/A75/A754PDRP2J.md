---
tag: A754PDRP2J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $k(k>5)$, represent a given positive integer in base $k$, and write the product of the sum of the digits of this base $k$ number and $(k-1)^2$ after the given positive integer. Continue this operation on the new number obtained to form a sequence. Prove: from a certain number onwards, all subsequent numbers are equal.
