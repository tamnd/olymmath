---
tag: 6Z2JDS7PSN
kind: problem
type: answer
answer: P(x) = ax^3 + bx + c
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P(X)$ with real coefficients such that if real numbers $x,y$ and $z$ satisfy $x+y+z=0,$ then the points $\left(x,P(x)\right), \left(y,P(y)\right), \left(z,P(z)\right)$ are all colinear.
