---
tag: EMETC86GPH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80625
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, a bank produces coins of value $\frac{1}{n}$. Given a finite collection of these coins with a total value of at most $k-\frac{1}{2}$, prove that it is possible to divide this collection into at most $k$ groups of coins, each with a total value of at most 1. A value may appear multiple times in the given collection.
