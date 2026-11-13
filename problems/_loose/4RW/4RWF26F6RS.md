---
tag: 4RWF26F6RS
kind: problem
type: answer
answer: (x, y, z) = (0, 0, 0) or z = 6 with {x, y} = {3 + sqrt(3), 3 − sqrt(3)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Solve the system of equations
$$
\begin{cases}
x + y = z, \\
x^2 + y^2 = 4z, \\
x^3 + y^3 = 18z.
\end{cases}
$$
