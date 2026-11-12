---
tag: PS5CRSGRSE
kind: problem
type: answer
answer: (1,5,2,3),(5,1,2,3),(1,5,3,2),(5,1,3,2),(2,3,1,5),(2,3,5,1),(3,2,1,5),(3,2,5,1),(2,2,2,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system in natural numbers

$$
\begin{aligned}
& x+y=z t, \\
& z+t=x y .
\end{aligned}
$$
