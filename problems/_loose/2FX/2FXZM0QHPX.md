---
tag: 2FXZM0QHPX
kind: problem
type: answer
answer: All permutations of (4, 4, 1/2) and (1, 1, 8).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: es
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0000.parquet#row=91
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine todas las ternas de números reales $(x, y, z)$ que satisfacen el siguiente sistema de ecuaciones:
$$
\begin{aligned}
xyz &= 8, \\
x^2y + y^2z + z^2x &= 73, \\
x(y - z)^2 + y(z - x)^2 + z(x - y)^2 &= 98.
\end{aligned}
$$
