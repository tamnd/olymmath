---
tag: S3PYB41K9Y
kind: problem
type: answer
answer: n=3n=4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n \geq 3$ for which it is possible to specify a natural number $a_{i}$ for each $i=1,2, \ldots, n$ such that the following conditions are satisfied:

(1) For all $i$ with $1 \leq i \leq n$, $0 \leq a_{i} \leq \frac{1}{2}(n-1) \cdot n$.

(2) No two of the differences $a_{j}-a_{i}$, which can be formed for all $i, j$ with $1 \leq i \leq n, 1 \leq j \leq n$ and $i \neq j$, are equal.
