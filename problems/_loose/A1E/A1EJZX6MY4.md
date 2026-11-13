---
tag: A1EJZX6MY4
kind: problem
type: answer
answer: \frac{1}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number, find the smallest constant $C$ such that for all $x_{1}, \ldots, x_{n} \geqslant 0$

$$
\sum_{1 \leqslant i<j \leqslant n} x_{i} x_{j}\left(x_{i}^{2}+x_{j}^{2}\right) \leqslant C\left(\sum_{i=1}^{n} x_{i}\right)^{4}
$$
