---
tag: AXVX1MC29S
kind: problem
type: answer
answer: x_{1}=2,y_{1}=4,z_{1}=8,\quadx_{2}=\frac{1}{4},y_{2}=\frac{1}{16},z_{2}=\frac{1}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88898
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system of equations

$$
\begin{aligned}
& x=2^{\frac{4}{1+\log _{2} z}} \\
& y=2^{\frac{4}{1+\log _{2} x}} \\
& z=2^{\frac{9}{1+\log _{2} y}}
\end{aligned}
$$
