---
tag: 89ZSNYJPSR
kind: problem
type: answer
answer: N-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $N \geqslant 3$. We call a set of $N$ points on the coordinate plane admissible if their abscissas are distinct, and each of these points is colored either red or blue. We will say that a polynomial $P(x)$ separates an admissible set of points if either there are no red points above the graph of $P(x)$ and no blue points below, or vice versa (points of both colors may lie on the graph itself). For what smallest $k$ can any admissible set of $N$ points be separated by a polynomial of degree no more than $k$?

(K. Tyschuk)
