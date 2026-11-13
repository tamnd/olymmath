---
tag: YNPRKYMRE7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71645
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the numbers $y_{0}, y_{1}, \ldots, y_{n}$ be such that for any polynomial $f(x)$ of degree $m<n$ the following equality holds:

$\sum_{k=0}^{n} f(k) y_{k}=0$.

Prove that $y_{k}=\lambda(-1)^{k} C_{n}^{k}$, where $\lambda-$ is some fixed number.
