---
tag: RDDK9YPZHP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241363
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. Find all $r\in \mathbb{R}$ so that the system of equations in real variables $x_1, x_2, \dots, x_n$:
\begin{align*}
&(r\cdot x_1-x_2)(r\cdot x_1-x_3)\dots (r\cdot x_1-x_n)=\\
=&(r\cdot x_2-x_1)(r\cdot x_2-x_3)\dots (r\cdot x_2-x_n)=\\
& \vdots \\
=&(r\cdot x_n-x_1)(r\cdot x_n-x_2)\dots (r\cdot x_n-x_{n-1})
\end{align*}
has a solution where the numbers $x_1, x_2, \dots, x_n$ are pairwise distinct.
