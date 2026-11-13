---
tag: CD1XXMQT04
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n+r$ non-zero vectors $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n+r}$ in $n$-dimensional space satisfy the inner product
$$
\left(\alpha_{i}, \alpha_{j}\right) \leqslant 0, 1 \leqslant i<j \leqslant n+r,
$$
(i.e., the angle between any two $\alpha_{i}, \alpha_{j}$ is not acute), then $r \leqslant n$, and these $n+r$ vectors can be divided into $r$ groups, with vectors from different groups being orthogonal (i.e., their inner product is 0). When $r=n$, these $2n$ vectors can be divided into $n$ groups, each containing two vectors. Vectors from different groups are orthogonal; vectors in the same group are in opposite directions.
