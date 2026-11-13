---
tag: 1NZGBWW055
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive odd number $n$, complex numbers $z_{1}, z_{2}, \cdots, z_{n}$ satisfy
$$
\begin{array}{l}
\left|z_{1}\right| \leqslant 1,\left|z_{2}\right| \leqslant 1, \cdots,\left|z_{n}\right| \leqslant 1, \\
z_{1}+z_{2}+\cdots+z_{n}=0 .
\end{array}
$$

Prove: $\left|z_{1}^{2}+z_{2}^{2}+\cdots+z_{n}^{2}\right| \leqslant n-1$.
