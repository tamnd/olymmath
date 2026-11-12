---
tag: RFRH1VPT98
kind: problem
type: answer
answer: b\in(-\infty;-\frac{7}{12}]\cup(0;+\infty)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $b$, for each of which there exists a number $a$ such that the system

$$
\left\{\begin{array}{l}
x=\frac{7}{b}-|y+b| \\
x^{2}+y^{2}+96=-a(2 y+a)-20 x
\end{array}\right.
$$

has at least one solution $(x ; y)$.
