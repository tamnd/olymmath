---
tag: 9MXEH0Q9NB
kind: problem
type: answer
answer: '{(1, -1, 1), (-1, -1, -1)}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2018
    source: hf-mathnet
    label: Croatia Croatia_2018
---
Determine all triples $(x, y, z)$ of real numbers that satisfy
$$
\begin{align*}
x + y - z &= -1 \\
x^2 - y^2 + z^2 &= 1 \\
-x^3 + y^3 + z^3 &= -1.
\end{align*}
$$
