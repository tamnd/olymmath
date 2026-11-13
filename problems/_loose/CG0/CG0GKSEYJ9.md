---
tag: CG0GKSEYJ9
kind: problem
type: answer
answer: '[\frac{n^{2}}{2}]-1'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ be a permutation of the numbers $1,2, \ldots, n$, where $n \geq 2$. Determine the maximum possible value of the expression

$$
\sum_{k=1}^{n-1}\left|a_{k+1}-a_{k}\right|
$$

(Romania)
