---
tag: F2Y2ZDX4NB
kind: problem
type: answer
answer: \frac{F_{n-2}}{F_{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_n$ be the set of all bijective functions $f:\left\{1,2,\ldots,n\right\}\rightarrow\left\{1,2,\ldots,n\right\}$ that satisfy the conditions:

1. $f(k)\leq k+1$ for all $k\in\left\{1,2,\ldots,n\right\}$
2. $f(k)\neq k$ for all $k\in\left\{2,3,\ldots,n\right\}$

Find the probability that $f(1)\neq1$ for $f$ randomly chosen from $F_n$.
