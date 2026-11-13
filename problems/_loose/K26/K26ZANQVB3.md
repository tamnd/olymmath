---
tag: K26ZANQVB3
kind: problem
type: answer
answer: a = b = c = 0 or a = b = c = (1/2)^{1/3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Solve the following system of equations in real numbers:
$$
\begin{cases}
a^2 = b^5 + c^5 \\
b^2 = c^5 + a^5 \\
c^2 = a^5 + b^5.
\end{cases}
$$
