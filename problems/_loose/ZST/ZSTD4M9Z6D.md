---
tag: ZSTD4M9Z6D
kind: problem
type: answer
answer: \frac{2^{n+1}}{n+1}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=147286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence $\left\{a_{n}\right\}$ whose terms are all non-zero. Let the sum of the first $n$ terms of the sequence $\left\{a_{n}\right\}$ be $S_{n}$, and the sum of the first $n$ terms of the sequence $\left\{a_{n}^{2}\right\}$ be $T_{n}$, and $S_{n}^{2}+4 S_{n}-3 T_{n}=0\left(n \in \mathbf{Z}_{+}\right)$. Then the sum of the first $n$ terms of the sequence $\left\{\frac{(n-1)}{n(n+1)} a_{n}\right\}$ is $ $ .
