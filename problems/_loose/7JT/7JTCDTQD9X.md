---
tag: 7JTCDTQD9X
kind: problem
type: answer
answer: f(n)=n+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a function $f$ and $n$ a strictly positive integer, we denote $f^{n}$ the $n$-th composition of $f$ defined by $f^{n}=f \circ f \circ \ldots \circ f$ where $f$ appears $n$ times on the right-hand side.

Find all functions $f: \mathbb{N}^{*} \rightarrow \mathbb{N}^{*}$ such that

$$
f^{f(n)}(m)+m n=f(m) f(n)
$$

for all $m, n \in \mathbb{N}^{*}$.
