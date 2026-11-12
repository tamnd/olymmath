---
tag: N2RYF1A6QW
kind: problem
type: answer
answer: (\begin{pmatrix}9&-1&27\\5&-1&14\\-3&1&-8\end{pmatrix})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the matrix $A=\left(\begin{array}{ccc}1 & 1 & 2 \\ 3 & -1 & 0 \\ 1 & 1 & -2\end{array}\right)$ be used to

transform the vector $x$ in the basis $\left\{e_{1}, e_{2}, e_{3}\right\}$. Determine the transformation matrix $A^{\prime}$ in the basis $\left\{e_{1}^{\prime}, e_{2}^{\prime}, e_{3}^{\prime}\right\}$, if

$$
e_{1}^{\prime}=e_{1}-e_{2}+e_{3}, e_{2}^{\prime}=e_{1}+e_{2}-2 e_{3}, e_{3}^{\prime}=-e_{1}+2 e_{2}+e_{3} .
$$
