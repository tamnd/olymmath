---
tag: 8DQVZBXMSD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240842
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ l,d,k$ be natural numbers. We want to prove that for large numbers $ n$, for each $ k$-coloring of the $ n$-dimensional cube with side length $ l$, there is a $ d$-dimensional subspace that all of its vertices have the same color. Let $ H(l,d,k)$ be the least number such that for $ n\geq H(l,d,k)$ the previus statement holds.
a) Prove that:
$$ H(l,d + 1,k)\leq H(l,1,k) + H(l,d,k^l)^{H(l,1,k)}
$$
b) Prove that
$$ H(l + 1,1,k + 1)\leq H(l,1 + H(l + 1,1,k),k + 1)
$$
c) Prove the statement of problem.
d) Prove Van der Waerden's Theorem.
