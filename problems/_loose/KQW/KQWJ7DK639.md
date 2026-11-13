---
tag: KQWJ7DK639
kind: problem
type: answer
answer: n^3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n(n \geqslant 2)$. It is known that $2 n$ positive real numbers $a_{1}, a_{2}, \cdots, a_{2 n}$, satisfy:
$$
\sum_{k=1}^{n} a_{2 k-1} \cdot \sum_{k=1}^{n} a_{2 k}=\prod_{k=1}^{n} a_{2 k-1}+\prod_{k=1}^{n} a_{2 k} .
$$

Find the minimum value of $S=\sum_{k=1}^{2 n} \frac{a_{k}^{n-1}}{a_{k+1}}$, where $a_{2 n+1}=a_{1}$.
