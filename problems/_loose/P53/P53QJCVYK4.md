---
tag: P53QJCVYK4
kind: problem
type: answer
answer: '[(0, 0, 0), (1, 0, -1), (0, -1, 1), (-1, 1, 0)]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Determine all real solutions of the equations
$$
\begin{align*}
x^2 - y &= z^2 \\
y^2 - z &= x^2 \\
z^2 - x &= y^2.
\end{align*}
$$
