---
tag: 35G7WBY2QV
kind: problem
type: answer
answer: \frac{2k}{2k-n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $A=\left\{A_{1}, A_{2}, \cdots, A_{i}\right\}$, where every two subsets $A_{i}, A_{j}$ satisfy
$$
\left|A_{i} \triangle A_{j}\right|=k,
$$

then when $k=\frac{n+1}{2}$, $t \leqslant n+1$, and for other values of $k$, $t \leqslant n$.
