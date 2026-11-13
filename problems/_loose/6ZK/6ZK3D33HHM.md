---
tag: 6ZK3D33HHM
kind: problem
type: answer
answer: f(x)=0.5\cdot2^{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $f(x)$ has the following properties:

1. For real $x$, $f(x)>0$.
2. For real $x_{i}$, $f\left(x_{1}+x_{2}\right)=2 \cdot f\left(x_{1}\right) f\left(x_{2}\right)$.
3. $f(2)=2$.

Determine the function values $f(1), f(0), f(3)$, and $f(6)$! What function is this?
