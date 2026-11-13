---
tag: T7DXWP281G
kind: problem
type: answer
answer: n!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given positive integer $n(\ge 2)$, find maximum positive integer $A$ such that a polynomial with integer coefficients $P(x)$ with degree $n$ that satisfies the condition below exists.

$\bullet P(1), P(2), \cdots P(A)$ is a multiple of $A$

$\bullet P(0) = 0$ and the coefficient of the first term of $P(x)$ is $1$, In other words, $P(x)$ has the following form:
$$P(x) = c_nx^n + c_{n-1}x^{n-1}+\dots+c_2x^2+x \ \ (c_n \neq 0)$$
