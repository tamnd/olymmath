---
tag: 5WWFMWPK45
kind: problem
type: answer
answer: x_{n}=\frac{6}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence $\left\{x_{n}\right\}$, $x_{1}=3, x_{2}=2, x_{n}=\frac{x_{n-2} x_{n-1}}{2 x_{n-2}-x_{n-1}}(n \geqslant 3, n \in \mathbf{N})$, find the general term formula of the sequence $\left\{x_{n}\right\}$.
