---
tag: TN8KHGP8M2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144607
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}$ be positive numbers, satisfying for each $k \in\{1,2, \cdots, n\}$, we have $a_{1} a_{2} \cdots a_{k} \geqslant 1$. Prove:
$$
\sum_{k=1}^{n} \frac{k}{\prod_{j=1}^{k}\left(1+a_{j}\right)}<2 .
$$
