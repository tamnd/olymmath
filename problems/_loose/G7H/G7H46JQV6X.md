---
tag: G7H46JQV6X
kind: problem
type: answer
answer: 4(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $n \geq 3$, we say that $A=\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ is an $n$-list if every $a_{k}$ is an integer in the range $1 \leq a_{k} \leq n$. For each $k=1, \ldots, n-1$, let $M_{k}$ be the minimal possible non-zero value of $\left|\frac{a_{1}+\ldots+a_{k+1}}{k+1}-\frac{a_{1}+\ldots+a_{k}}{k}\right|$, across all $n$-lists. We say that an $n$-list $A$ is ideal if
$$
\left|\frac{a_{1}+\ldots+a_{k+1}}{k+1}-\frac{a_{1}+\ldots+a_{k}}{k}\right|=M_{k}
$$
for each $k=1, \ldots, n-1$.
Find the number of ideal $n$-lists.
