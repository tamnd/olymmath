---
tag: MG2VQRM1YT
kind: problem
type: answer
answer: K = c^{-c}(1-c)^{-(1-c)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0<c<1$ be a given real number. Determine the least constant $K$ such that the following holds: For all positive real $M$ that is greater than $1$, there exists a strictly increasing sequence $x_0, x_1, \ldots, x_n$ (of arbitrary length) such that $x_0=1, x_n\geq M$ and
$$\sum_{i=0}^{n-1}\frac{\left(x_{i+1}-x_i\right)^c}{x_i^{c+1}}\leq K.$$

(From 2020 IMOCSL A5. I think this problem is particularly beautiful so I want to make a separate thread for it :D )
