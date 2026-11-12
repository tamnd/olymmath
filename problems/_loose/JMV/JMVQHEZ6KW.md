---
tag: JMVQHEZ6KW
kind: problem
type: answer
answer: 0.96x^{2}-1.97x+3.07
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To determine the parameters $a_{1}, a_{2}$, and $a_{3}$ in the formula $y=a_{1} x^{2}+a_{2} x+a_{3}$, values of $y$ were measured at different values of $x$. The obtained sample is

$$
\begin{array}{rrrrrrrrrr}
x_{k} & -1 & -0.75 & -0.5 & -0.25 & 0 & 0.25 & 0.5 & 0.75 & 1 \\
y_{k} & 6.01 & 5.07 & 4.30 & 3.56 & 3.07 & 2.87 & 2.18 & 2.00 & 2.14
\end{array}
$$

Using these data, determine the parameters $a_{1}, a_{2}$, and $a_{3}$ by the method of least squares. The measurement errors of $x_{1}, \ldots, x_{9}$ and the computational errors can be neglected.
