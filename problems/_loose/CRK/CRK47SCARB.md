---
tag: CRK47SCARB
kind: problem
type: answer
answer: x,y,z=-3,2+\sqrt{3},2-\sqrt{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of equations:

$$
\begin{gathered}
x+y+z=1 \\
(y-z)^{2}+(x-z)^{2}+(x-y)^{2}=68 \\
x(y-z)^{2}+y(z-x)^{2}+z(x-y)^{2}=16
\end{gathered}
$$
