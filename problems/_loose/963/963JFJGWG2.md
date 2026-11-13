---
tag: 963JFJGWG2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given non-negative real numbers $x_{1}, x_{2}, \cdots, x_{n}$. If $x_{1}+x_{2}+\cdots+x_{n}=$ $n$, prove:
$$
\begin{array}{c}
\frac{x_{1}}{1+x_{1}^{2}}+\frac{x_{2}}{1+x_{2}^{2}}+\cdots+\frac{x_{n}}{1+x_{n}^{2}} \leqslant \frac{1}{1+x_{1}}+\frac{1}{1+x_{2}}+\cdots+ \\
\frac{1}{1+x_{n}} .
\end{array}
$$
