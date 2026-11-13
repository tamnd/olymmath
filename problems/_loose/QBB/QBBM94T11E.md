---
tag: QBBM94T11E
kind: problem
type: answer
answer: (x,y,z)=(-\frac{3}{2},\frac{5}{2},-\frac{1}{2})(x,y,z)=(0,1,-2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85709
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(x, y, z)$ consisting of three distinct real numbers, that satisfy the following system of equations:

$$
\begin{aligned}
x^{2}+y^{2} & =-x+3 y+z, \\
y^{2}+z^{2} & =x+3 y-z, \\
x^{2}+z^{2} & =2 x+2 y-z .
\end{aligned}
$$
