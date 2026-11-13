---
tag: TZ6YMP76P2
kind: problem
type: answer
answer: x_{1}=x_{2}=\cdots=x_{10}=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164945
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of equations:

$$
\begin{aligned}
& x_{1}+2 x_{2}+3 x_{3}+\ldots+9 x_{9}+10 x_{10}=55, \\
& x_{2}+2 x_{3}+3 x_{4}+\ldots+9 x_{10}+10 x_{1}=55, \\
& \vdots \\
& x_{10}+2 x_{1}+3 x_{2}+\ldots+9 x_{8}+10 x_{9}=55 .
\end{aligned}
$$
