---
tag: 940NRQZVS0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, for positive real numbers $a_{1}, a_{2}, \cdots, a_{n}$, find the minimum possible value of $\left(\sum_{i=1}^{n} a_{i}^{2}+2 \sum_{i=1}^{n} a_{i}+\frac{6 n^{2}+9 n+3}{2 n}\right)\left(\sum_{i=1}^{n} \frac{n \cdot i^{2}+3 i^{3}}{a_{i}}\right)$.
