---
tag: JJMZXV05TH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{0}=\frac{1}{2}, a_{n}=a_{n-1}+\frac{1}{n^{2}} a_{n-1}^{2}\left(n \in \mathbf{Z}_{+}\right) \text {. }
$$

Prove: $1-\frac{1}{2^{n+1}} \leqslant a_{n}<\frac{7}{5}\left(n \in \mathbf{Z}_{+}\right)$.
