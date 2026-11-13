---
tag: KGJFGTNGSC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77792
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2$ be an integer, and $x_{1}, \ldots, x_{n}$ be positive real numbers. Determine the largest value that the following quantity can take:

$$
\sum_{1 \leqslant i<j \leqslant n} 2\left\lfloor x_{i} x_{j}\right\rfloor-(n-1) \sum_{i=1}^{n}\left\lfloor x_{i}^{2}\right\rfloor
$$
