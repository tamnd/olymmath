---
tag: 4KGG7GMHZX
kind: problem
type: answer
answer: \begin{pmatrix}x&y\\\hline-0.5&0.5\\0.5&-0.5\\0&1\\0&-1\\1&0\\-1&0\\\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165953
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following system of equations ( $x$ and $y$ are in radians):

$$
\begin{gathered}
\sin x+\sin y=\sin (x+y), \\
|x|+|y|=1 .
\end{gathered}
$$
