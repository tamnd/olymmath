---
tag: 9TARR6SK19
kind: problem
type: answer
answer: A = B
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Each point $(x,y)$ in the plane, where $x$ and $y$ are non-negative integers with $x+y<n$, is coloured red or blue, subject to the following condition: if a point $(x,y)$ is red, then so are all points $(x',y')$ with $x'\leq x$ and $y'\leq y$. Let $A$ be the number of ways to choose $n$ blue points with distinct $x$-coordinates, and let $B$ be the number of ways to choose $n$ blue points with distinct $y$-coordinates. Prove that $A=B$.
