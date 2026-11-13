---
tag: NE3REBP0CX
kind: problem
type: answer
answer: a_{n}=\frac{-5^{n}+(-1)^{n-1}3\cdot2^{n+1}}{2\cdot5^{n}+(-1)^{n-1}\cdot2^{n+1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the general term of the following recursive sequences:
$$
\begin{array}{l}
\text { (1) } a_{1}=\frac{1}{2}, a_{n+1}=\frac{a_{n}+3}{2 a_{n}-4}(n \geqslant 1) \text {; } \\
\text { (2) } a_{1}=5, a_{n+1}=\frac{a_{n}-4}{a_{n}-3}(n \geqslant 1) .
\end{array}
$$
