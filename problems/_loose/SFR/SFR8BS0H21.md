---
tag: SFR8BS0H21
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ defined as follows: $a_{1}=\frac{1}{2}, a_{n+1}=\frac{a_{n}^{2}}{a_{n}^{2}-a_{n}+1}$, prove that: $\sum_{k=1}^{2017} a_{k}<1$.
