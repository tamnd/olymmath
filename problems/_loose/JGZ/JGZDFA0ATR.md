---
tag: JGZDFA0ATR
kind: problem
type: answer
answer: z_{k}=\sqrt{\lambda_{k}}(isanycomplex,k=1,2,\cdots,n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}$ be given positive numbers, and $\sum_{k=1}^{n} \lambda_{k}=1$. Try to find all complex numbers $z_{1}, z_{2}, \cdots, z_{n}$ for which the inequality $\left|\sum_{k=1}^{n} \sqrt{\lambda_{k}} z_{k}\right|^{2} \geqslant \sum_{k=1}^{n}\left|z_{k}\right|^{2}$ holds.
