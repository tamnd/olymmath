---
tag: CWW7B5DSB8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{1}, x_{2}, \cdots, x_{n}$ are positive real numbers. Prove:
$$
\begin{array}{l}
\frac{x_{1}^{2}}{x_{2}}+\frac{x_{2}^{3}}{x_{3}^{2}}+\cdots+\frac{x_{n-1}^{n}}{x_{n}^{n-1}}+\frac{x_{n}^{n+1}}{x_{1}^{n}} \\
\geqslant 2 x_{2}+2 x_{3}+\cdots+2 x_{n}-(n-2) x_{1} .
\end{array}
$$
