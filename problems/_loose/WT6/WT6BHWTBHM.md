---
tag: WT6BHWTBHM
kind: problem
type: answer
answer: x = y = a, z = b; and x = y = b, z = a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 55rd Ukrainian National Mathematical Olympiad - Fourth Round
---
For every real numbers $a \ne b$ solve the system:
$$
\begin{cases}
3x+z = 2y+(a+b), \\
3x^2 + 3xz = y^2 + 2(a+b)y + ab, \\
x^3 + 3x^2z = y^2(a+b) + 2yab.
\end{cases}
$$
(Rublyov Bogdan)
