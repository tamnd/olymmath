---
tag: SFFD7V2G94
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a strictly increasing unbounded sequence of positive numbers $a_{1}, a_{2}, \cdots$. Prove:
(1) There exists a natural number $k_{0}$ such that for all $k \geqslant k_{0}$, we have
$$
\frac{a_{1}}{a_{2}}+\frac{a_{2}}{a_{3}}+\cdots+\frac{a_{k}}{a_{k+1}}<k-1 .
$$
(2) When $k$ is sufficiently large, we have $\frac{a_{1}}{a_{2}}+\frac{a_{2}}{a_{3}}+\cdots+\frac{a_{k}}{a_{k+1}}<k-1985$.
