---
tag: 3CT1TN1WM7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Hermite polynomials are defined as follows: $H_{0}=1$ and for $n \geqslant 1, H_{n}(x)=$ $\frac{1}{n!} \prod_{k=0}^{n-1}(X-k)$.

1. Verify that for all $k \in \mathbb{Z}, H_{n}(k) \in \mathbb{Z}$.
2. Find all polynomials $P \in \mathbb{C}[X]$ such that, for all $k \in \mathbb{N}, P(k) \in \mathbb{Z}$.
3. i Calculate, for integers $j \leqslant k$ the sum:

$$
\sum_{i=j}^{k}(-1)^{k-i}\binom{k}{i}\binom{i}{j}
$$
