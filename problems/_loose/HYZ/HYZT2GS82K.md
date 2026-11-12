---
tag: HYZT2GS82K
kind: problem
type: answer
answer: -4e^{-2}-2\sin4,\quade^{-2}-\cos4,\quade^{-2}-2\sin4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34530
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Cauchy problem for the system

$$
\left\{\begin{array}{l}
\frac{d x}{d t}=8 y \\
\frac{d y}{d t}=-2 z \\
\frac{d z}{d t}=2 x+8 y-2 z
\end{array}\right.
$$

with initial conditions $x(0)=-4, y(0)=0, z(0)=1$.
