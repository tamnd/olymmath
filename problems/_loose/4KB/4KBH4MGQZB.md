---
tag: 4KBH4MGQZB
kind: problem
type: answer
answer: u_{n}=2-\frac{2}{3}(-1)^{n}-\frac{1}{3}2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given: $u_{0}=1, u_{1}=2, u_{2}=0$ and
$$
u_{n}=2 u_{n-1}+u_{n-2}-2 u_{n-3} (n \geqslant 3) \text {, }
$$

Find the general term formula for the sequence $\left\{u_{n}\right\}_{n \geqslant 0}$.
