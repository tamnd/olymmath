---
tag: MM1A2XV3D2
kind: problem
type: answer
answer: a_{n}=2+n-3^{n+1}+n\cdot3^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the recurrence relation:
$$
\left\{\begin{array}{l}
a_{n}=8 a_{n-1}-22 a_{n-2}+24 a_{n-3}-9 a_{n-4} (n \geqslant 4), \\
a_{0}=-1, a_{1}=-3, a_{2}=-5, a_{3}=5 .
\end{array}\right.
$$
