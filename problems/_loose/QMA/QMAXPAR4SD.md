---
tag: QMAXPAR4SD
kind: problem
type: answer
answer: x_{1}=0.5,y_{1}=-0.5;x_{2}=0,y_{2}=0;x_{3}=1,y_{3}=0;x_{4}=0.5,y_{4}=0.5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of equations:

$$
\begin{aligned}
& x+y=x^{2}+2 x y+y^{2} \\
& x-y=x^{2}-2 x y+y^{2}
\end{aligned}
$$
