---
tag: KETHQ4HMFX
kind: problem
type: answer
answer: p^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a prime number $p$ and natural $n$ such that $p \geq n \geq 3$. Set $A$ is made of sequences of lenght $n$ with elements from the set $\{0,1,2,...,p-1\}$ and have the following property:
For arbitrary two sequence $(x_1,...,x_n)$ and $(y_1,...,y_n)$ from the set $A$ there exist three different numbers $k,l,m$ such that:

$x_k \not = y_k$, $x_l \not = y_l$, $x_m \not = y_m$.
Find the largest possible cardinality of $A$.
