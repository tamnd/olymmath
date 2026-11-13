---
tag: RQ2TCVYXST
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the curve $y=x^{2}+1$. Let's determine points $P_{1}, P_{2}, \ldots, P_{n}$ on it such that their projections on the $x$-axis are denoted by $Q_{1}, Q_{2}, \ldots, Q_{n}$, respectively, and the tangent to the parabola at $P_{i}$ passes through $Q_{i+1}$ if $1 \leqq i \leqq n-1$ and through $Q_{1}$ if $i=n$. Find the number of different point $n$-tuples for $n=6$.
