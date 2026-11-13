---
tag: E9TNYE52QB
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $D_{1}, \ldots, D_{n}$ be cans, for whose sizes (diameters) $d_{1}, \ldots, d_{n}$ in a suitable unit of measurement

$$
d_{1}=2, d_{2}=3, \ldots, d_{n}=n+1
$$

holds. Furthermore, let $G_{1}, \ldots, G_{n}$ be objects, for whose sizes $g_{1}, \ldots, g_{n}$

$$
g_{1}=1, g_{2}=2, \ldots, g_{n}=n
$$

holds. The sizes are adjusted such that the following holds:

$G_{i}$ fits into $D_{j}$ if and only if $g_{i} \leq d_{j}$.

Determine for each natural number $n \geq 1$ the number $A(n)$ of all distributions of the objects into the cans, where exactly one object is in each can.
