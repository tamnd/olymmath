---
tag: DA2R2A5FS6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{n}, b_{1}, b_{2}, \ldots, b_{n}, c_{1}, c_{2}, \ldots, c_{n}$ be non-negative numbers, and

$$
M=\max \left(\sum_{i=1}^{n} a_{i}, \sum_{i=1}^{n} b_{i}, \sum_{i=1}^{n} c_{i}\right)
$$

Prove that

$$
\sum_{k=1}^{n} \sum_{i=1}^{k}\left(a_{k} c_{i}+b_{i} c_{k}-a_{k} b_{i}\right) \geq M \sum_{k=1}^{n} c_{k}
$$
