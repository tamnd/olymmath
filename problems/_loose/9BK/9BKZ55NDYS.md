---
tag: 9BKZ55NDYS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be natural numbers with $m>n$. Define

$$
x_{k}=\frac{m+k}{n+k} \text { for } k=1, \ldots, n+1
$$

Show: If all $x_{i}$ are integers, then $x_{1} \cdot x_{2} \cdot \ldots \cdot x_{n+1}-1$ is not a power of two.
