---
tag: 55A7S8CYWC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(not covered in class) Let $k, n, r \in \mathbb{N}$ such that $n, k \geq 1$ and $r \leq n-1$. Let $a_{1}, \ldots, a_{n}$ be integers whose sum is $k n+r$. Prove that

$$
\binom{a_{1}}{2}+\ldots+\binom{a_{n}}{2} \geq r\binom{k+1}{2}+(n-r)\binom{k}{2}
$$
