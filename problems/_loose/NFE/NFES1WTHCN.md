---
tag: NFES1WTHCN
kind: problem
type: answer
answer: "84"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each non-zero natural number $n$, we denote by $p(n)$ the largest perfect square at most equal to $n$.

a) Determine the number of pairs of non-zero natural numbers $(m, n)$, with $m \leq n$, for which

$$
p(2 m+1) \cdot p(2 n+1)=400
$$

b) Determine the set $\left\{n \in \mathbb{N}^{*} \mid n \leq 100\right.$ and $\left.\frac{p(n+1)}{p(n)} \notin \mathbb{N}\right\}$.
