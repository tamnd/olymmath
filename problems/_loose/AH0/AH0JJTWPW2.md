---
tag: AH0JJTWPW2
kind: problem
type: answer
answer: x = (37 + sqrt(13)) / 2, y = (5 + sqrt(13)) / 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system
$$
\left|
\begin{array}{l}
\sqrt{x^2 + y^2 - 16(x + y) - 9y + 7} = y - 2 \\
x + 13\sqrt[4]{x - y} = y + 42
\end{array}
\right.
$$
