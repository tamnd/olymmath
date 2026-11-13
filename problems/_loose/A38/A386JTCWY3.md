---
tag: A386JTCWY3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, \ldots x_{n}$ and $y_{1}, \ldots, y_{n}$ be real numbers. We define a matrix $A=\left(a_{i, j}\right)_{1 \leq i, j \leq n}$ by

$$
A_{i, j}=\left\{\begin{array}{l}
1 \text { if } x_{i}+y_{j} \geq 0 \\
0 \text { otherwise. }
\end{array}\right.
$$

Suppose that $B$ is an $n \times n$ matrix containing only 0s and 1s, such that the sum of the elements in each row and each column is equal to the corresponding sum for the matrix $A$. Show that $A=B$.
