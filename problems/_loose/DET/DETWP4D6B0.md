---
tag: DETWP4D6B0
kind: problem
type: answer
answer: F_{n}=3\cdot2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any $n \in \mathbb{N}$, denote by $A_{n}$ the set of permutations $\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ of set $\{1,2$, $\ldots, n\}$ satisfying

$$
k \mid 2\left(a_{1}+a_{2}+\cdots+a_{k}\right), \text { for each } 1 \leq k \leq n
$$

Compute the number of elements of $A_{n}$.

(Vidan Govedarica)
