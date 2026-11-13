---
tag: 2W7GB1RV5N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A, B, C, x_{1}, x_{2}, x_{3}, x_{4}$ be arbitrary real numbers such that $x_{1}<x_{2}<x_{3}<x_{4}$, and let $p(x)=$ $A x^{2}+B x+C$. It is to be proven that

$$
\begin{gathered}
\max _{i=1,2,3,4}\left|p\left(x_{i}\right)-y_{i}\right| \geq 1 \\
\text { where } y_{1}=y_{3}=1, y_{2}=y_{4}=-1
\end{gathered}
$$
