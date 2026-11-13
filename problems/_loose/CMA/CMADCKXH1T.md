---
tag: CMADCKXH1T
kind: problem
type: answer
answer: \frac{(n+1)!}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a set of $n + 1$ elements, $n\geq 2$. Ordered $n$-tuples $(a_1,\ldots,a_n)$ and $(b_1,\ldots,b_n)$ formed from distinct elements of $X$ are called* disjoint *if there exist distinct indices $1\leq i \neq j\leq n$ such that $a_i = b_j$. Find the maximal number of pairwise disjoint $n$-tuples.
