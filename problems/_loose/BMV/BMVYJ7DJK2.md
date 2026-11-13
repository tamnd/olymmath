---
tag: BMVYJ7DJK2
kind: problem
type: answer
answer: \frac{n}{8(n-1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n>2$, non-negative real numbers $x_{1}, x_{2}, \cdots, x_{n}$ satisfy $x_{1}+x_{2}+\cdots+x_{n}=1$. Prove:
$$
\begin{array}{l}
\sum_{i<j} \frac{x_{i} x_{j}}{\left[1+(n-2) x_{i}\right]\left[1+(n-2) x_{j}\right]} \\
\leqslant \frac{n}{8(n-1)} .
\end{array}
$$
