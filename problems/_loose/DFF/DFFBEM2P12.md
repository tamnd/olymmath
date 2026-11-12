---
tag: DFFBEM2P12
kind: problem
type: answer
answer: u(x,)=e^{-x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Cauchy problem for the heat equation

$$
\begin{gathered}
u_{t}=u_{x x}, x \in(-\infty,+\infty), t \in(0,+\infty) \\
u(x, 0)=e^{-x} x \in(-\infty,+\infty)
\end{gathered}
$$
