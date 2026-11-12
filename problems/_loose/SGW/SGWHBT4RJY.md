---
tag: SGWHBT4RJY
kind: problem
type: answer
answer: x_{1}=x_{3}=\cdots=x_{99}=-1,x_{2}=x_{4}=\cdots=x_{100}=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system

$$
\left\{\begin{aligned}
x_{1}+2 x_{2}+2 x_{3}+\cdots+2 x_{100} & =1 \\
x_{1}+3 x_{2}+4 x_{3}+\cdots+4 x_{100} & =2 \\
x_{1}+3 x_{2}+5 x_{3}+\cdots+6 x_{100} & =3 \\
\cdots & \cdots \\
x_{1}+3 x_{2}+5 x_{3}+\cdots+199 x_{100} & =100
\end{aligned}\right.
$$
