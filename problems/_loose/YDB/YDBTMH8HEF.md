---
tag: YDBTMH8HEF
kind: problem
type: answer
answer: (x,y,z)=(1,\frac{-1+i\sqrt{3}}{2},\frac{-1-i\sqrt{3}}{2})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system of equations in the set of complex numbers

$$
\begin{aligned}
& x(x-y)(x-z)=3 \\
& y(y-x)(y-z)=3 \\
& z(z-x)(z-y)=3
\end{aligned}
$$
