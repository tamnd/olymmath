---
tag: FT7SC4Q6M7
kind: problem
type: answer
answer: a_{n}=2^{n-2}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ is defined by the conditions $a_{1}=-1$ and $a_{n+1}=\sum_{k=1}^{n}\left(a_{k}+1\right)$ for $n \geqslant 1$. Find the explicit formula for this sequence.
