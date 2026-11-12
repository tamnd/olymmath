---
tag: BA3C1EZ5YX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the first mixed problem for the homogeneous wave equation in a rectangle

$$
\begin{aligned}
& u_{t t}=4 \Delta u, x \in(0,2), y \in(0,1), t \in(0, \infty) \\
& u(x, y, 0)=0, u_{t}(x, y, 0)=(2-x)(1-y) x y \\
& u(0, y, t)=u(x, 0, t)=u(2, y, t)=u(x, 1, t)=0
\end{aligned}
$$
