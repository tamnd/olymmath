---
tag: 7F2SWVAM0A
kind: problem
type: answer
answer: \frac{x^{n+1}-1}{x-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Sum of a geometric series)

Let $x \in \mathbb{R}, n \in \mathbb{N}$. Depending on the value of $x$, determine the value of $\sum_{k=0}^{n} x^{k}$.

Proposition 1.1.13.

Let $a_{1}, a_{2}, \ldots, a_{n} \in \mathbb{R}$. Then $\left(\sum_{k=1}^{n} a_{k}\right)^{2}=\sum_{k=1}^{n} a_{k}^{2}+2 \sum_{1 \leq i<j \leq n} a_{i} a_{j}$
