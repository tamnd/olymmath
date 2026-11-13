---
tag: R3FVQJYD40
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We can conduct the following moves to a real number $x$: choose a positive integer $n$, and positives reals $a_1,a_2,\cdots, a_n$ whose reciprocals sum up to $1$. Let $x_0=x$, and $x_k=\sqrt{x_{k-1}a_k}$ for all $1\leq k\leq n$. Finally, let $y=x_n$. We said $M>0$ is "tremendous" if for any $x\in \mathbb{R}^+$, we can always choose $n,a_1,a_2,\cdots, a_n$ to make the resulting $y$ smaller than $M$. Find all tremendous numbers.

*Proposed by ckliao914.*
