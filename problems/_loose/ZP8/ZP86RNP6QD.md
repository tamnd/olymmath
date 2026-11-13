---
tag: ZP86RNP6QD
kind: problem
type: answer
answer: x=0,y=0,z=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system of equations,

$$
\begin{aligned}
& a_{11} x+a_{12} y+a_{13} z=0 \\
& a_{21} x+a_{22} y+a_{23} z=0 \\
& a_{31} x+a_{32} y+a_{33} z=0
\end{aligned}
$$

if the coefficients satisfy the following conditions:

a) each one is positive

b) the sum of the coefficients in each row and each column is 1,
c) $a_{11}=a_{22}=a_{33}=1 / 2$.
