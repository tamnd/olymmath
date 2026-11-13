---
tag: EVEFVZEFNJ
kind: problem
type: answer
answer: r_{i}=(\frac{a_{i}^{}}{\sum_{i=1}^{n}a_{i}^{}})^{\frac{-1}{}}(i=1,2,\cdots,n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $a_{1}, a_{2}, \cdots, a_{n}$ and $m>1$. Find real numbers $r_{1}, r_{2}, \cdots, r_{n}$, such that for any non-negative real numbers $x_{1}$, $x_{2}, \cdots, x_{n}$, we have
$$
\sum_{i=1}^{n} r_{i}\left(x_{i}-a_{i}\right) \leqslant\left(\sum_{i=1}^{n} x_{i}^{m}\right)^{\frac{1}{m}}-\left(\sum_{i=1}^{n} a_{i}^{m}\right)^{\frac{1}{m}} .
$$
