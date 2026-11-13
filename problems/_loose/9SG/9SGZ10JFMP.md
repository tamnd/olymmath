---
tag: 9SGZ10JFMP
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximum value $m_{n}$ of the function
$$
\begin{array}{l}
f_{n}\left(x_{1}, x_{2}, \cdots, x_{n}\right) \\
= \frac{x_{1}}{\left(1+x_{1}+\cdots+x_{n}\right)^{2}}+ \\
\frac{x_{2}}{\left(1+x_{2}+\cdots+x_{n}\right)^{2}}+\cdots+\frac{x_{n}}{\left(1+x_{n}\right)^{2}}
\end{array}
$$

express $m_{n}$ in terms of $m_{n-1}$, and find $\lim _{n \rightarrow \infty} m_{n}$, where $x_{i} \geqslant 0$.
