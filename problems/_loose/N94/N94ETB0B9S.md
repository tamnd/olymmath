---
tag: N94ETB0B9S
kind: problem
type: answer
answer: (1,2,3),(-1,-2,-3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186031
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(x, y, z)$ of real numbers that satisfy the system of equations

$$
\begin{aligned}
& x \cdot(y+z)=5 \\
& y \cdot(x+z)=8 \\
& z \cdot(x+y)=9
\end{aligned}
$$
