---
tag: X4D9QMHMNS
kind: problem
type: answer
answer: \frac{2}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 2$. Find the smallest positive real number $c$, such that for any complex numbers $z_{1}, z_{2}, \cdots, z_{n}$, we have
$$
\left|\sum_{i=1}^{n} z_{i}\right|+c \sum_{1 \leqslant i<j \leqslant n}\left|z_{i}-z_{j}\right| \geqslant \sum_{i=1}^{n}\left|z_{i}\right| .
$$
