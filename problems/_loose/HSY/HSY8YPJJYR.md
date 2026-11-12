---
tag: HSY8YPJJYR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the first mixed problem for the homogeneous wave equation on an interval

$$
\begin{gathered}
u_{t t}-4 u_{x x}=0, x \in(0,1), t \in(0, \infty) \\
u(x, 0)=0, u_{t}(x, 0)=x(1-x) \\
u(0, t)=u(1, t)=0
\end{gathered}
$$
