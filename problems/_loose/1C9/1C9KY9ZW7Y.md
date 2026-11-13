---
tag: 1C9KY9ZW7Y
kind: problem
type: answer
answer: n = 4, 6, 8, \ldots, 2^N
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The $ 2^N$ vertices of the $ N$-dimensional hypercube $ \{0,1\}^N$ are labelled with integers from $ 0$ to $ 2^N - 1$, by, for $ x = (x_1,x_2,\ldots ,x_N)\in \{0,1\}^N$,
$$v(x) = \sum_{k = 1}^{N}x_k2^{k - 1}.$$
For which values $ n$, $ 2\leq n \leq 2^n$ can the vertices with labels in the set $ \{v|0\leq v \leq n - 1\}$ be connected through a Hamiltonian circuit, using edges of the hypercube only?

*E. Bazavan & C. Talau*
