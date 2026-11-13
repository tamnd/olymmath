---
tag: MC7VMYNQ1Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 2$ be an integer. Consider the system of equations
\begin{align} x_1+\frac{2}{x_2}=x_2+\frac{2}{x_3}=\dots=x_n+\frac{2}{x_1} \end{align}
1. Prove that $(1)$ has infinitely many real solutions $(x_1,\dotsc,x_n)$ such that the numbers $x_1,\dotsc,x_n$ are distinct.
2. Prove that every solution of $(1)$, such that the numbers $x_1,\dotsc,x_n$ are not all equal, satisfies $\vert x_1x_2\cdots x_n\vert=2^{n/2}$.
