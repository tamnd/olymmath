---
tag: 4ZC5AK9YZ6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123971
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the problem: Let $a_{i}, b_{i} > 0 (1 \leqslant i \leqslant n), m \in \mathbf{N}^{\cdot}$, then
$$
\sum_{i=1}^{n} \frac{a_{i}^{m+1}}{b_{i}^{m}} \geqslant (m+1) \sum_{i=1}^{n} a_{i} - m \sum_{i=1}^{n} b_{i},
$$

equality holds if and only if $a_{i} = b_{i} (1 \leqslant i \leqslant n)$.
