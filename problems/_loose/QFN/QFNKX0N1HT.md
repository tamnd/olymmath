---
tag: QFNKX0N1HT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264518
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{a_n\}$ be the sequence such that $a_0=2019$ and $$a_n=-\frac{2020}{n}\sum_{k=0}^{n-1}a_k.$$ Compute the last three digits of $\sum_{n=1}^{2020}2020^na_nn$.
