---
tag: T2F9C0BVMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinitely large grid is filled such that each grid square contains exactly one of the digits $\{ 1,2,3,4\},$ each digit appears at least once, and the digit in each grid square equals the digit located $5$ squares above it as well as the digit located $5$ squares to the right. A group of $4$ horizontally adjacent digits or $4$ vertically adjacent digits is chosen randomly, and depending on its orientation is read left to right or top to bottom to form an $4$-digit integer. The expected value of this integer is also a $4$-digit integer $N$. Given this, find the last three digits of the sum of all possible values of $N$.
