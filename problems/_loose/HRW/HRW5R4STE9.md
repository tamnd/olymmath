---
tag: HRW5R4STE9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 66th ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $C$ be the set of all functions $f: [0, 1] \to \mathbb{R}$, twice differentiable on $[0, 1]$, with at least two (not necessarily distinct) zeroes in $[0, 1]$ and such that $|f''(x)| \le 1$, for all $x$ in $[0, 1]$. Find the maximum possible value of the integral
$$
\int_0^1 |f(x)| dx,
$$
when $f$ runs through $C$, and find the functions for which the maximum is reached. (A double zero is a point $a$ such that $f(a) = f'(a) = 0$.)
