---
tag: 1DAD70KN8P
kind: problem
type: answer
answer: '{\begin{pmatrix}x\leqslant1/5,\\(1-x)/2\end{pmatrix}.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The truncated difference of numbers $x$ and $y$ is the operation $x-y$, the result of which is equal to the usual difference $x-y$ if $x \geqslant y$, and zero if $x<y$.

Solve the system of equations $\left\{\begin{array}{l}2 x-y=0 \\ x+2 y=1\end{array}\right.$.
