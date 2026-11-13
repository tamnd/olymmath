---
tag: 8FPD03PJWC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine whether there exists a positive integer $n$ such that it is possible to find at least $2018$ different quadruples $(x,y,z,t)$ of positive integers that simultaneously satisfy equations
$$\begin{cases}
x+y+z=n\\
xyz = 2t^3.
\end{cases}$$
