---
tag: 2VYF0K5HH4
kind: problem
type: answer
answer: 2^{\frac{n(n+1)}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a strictly positive integer. Denote by $\mathfrak{S}_{n}$ the set of bijections from the set $\{1,2, \ldots, n\}$ to itself. Let $\sigma \in \mathfrak{S}_{n}$; we say that $(i, j)$ (for $1 \leq i, j \leq n$) is an inversion of $\sigma$ if $i\sigma(j)$. We also say that $i$ (for $1 \leq i \leq n$) is a record of $\sigma$ if for all $j$ with $1 \leq j \leq i-1$ we have $\sigma(j)<\sigma(i)$ (thus, 1 is always a record). Finally, denote $\operatorname{inv}(\sigma)$ the number of inversions of $\sigma$ and $\operatorname{rec}(\sigma)$ its number of records.

Calculate the following sum:

$$
\sum_{\sigma \in \mathfrak{S}_{n}} 2^{\operatorname{inv}(\sigma)+\operatorname{rec}(\sigma)}
$$
