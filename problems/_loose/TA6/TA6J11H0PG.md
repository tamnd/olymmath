---
tag: TA6J11H0PG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rounding a number means replacing it with one of the two nearest integers.

Given $n$ numbers. Prove that they can be rounded in such a way that the sum of any $m$ rounded numbers ( $1 \leqslant m \leqslant n$ ) differs from the sum of these same unrounded numbers by no more than $(n+1) / 4$.
