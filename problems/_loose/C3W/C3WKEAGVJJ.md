---
tag: C3WKEAGVJJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n$. Prove that for all real numbers $x_{1}, x_{2}, \ldots, x_{n} \geqslant 0$ the inequality holds

$$
\left(x_{1}+\frac{x_{2}}{2}+\cdots+\frac{x_{n}}{n}\right) \cdot\left(x_{1}+2 x_{2}+\cdots+n x_{n}\right) \leqslant \frac{(n+1)^{2}}{4 n}\left(x_{1}+x_{2}+\cdots+x_{n}\right)^{2}
$$
