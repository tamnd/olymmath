---
tag: 2SCFAV9E1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A matrix $\begin{bmatrix}
x & y \\
z & w
\end{bmatrix}$ has square root $\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}$ if
$$\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}^2
=
\begin{bmatrix}
a^2 + bc &ab + bd \\
ac + cd & bc + d^2
\end{bmatrix}
=
\begin{bmatrix}
x & y \\
z & w
\end{bmatrix}$$
Determine how many square roots the matrix $\begin{bmatrix}
2 & 2 \\
3 & 4
\end{bmatrix}$ has (complex coefficients are allowed).
