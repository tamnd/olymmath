---
tag: 4HNFACE4AS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/2019
    source: hf-mathnet
    label: Baltic Way Baltic Way 2019
---
Let $m \ge 2$ be a positive integer. Consider the $2m$ numbers
$$
1 \cdot 2, 2 \cdot 3, 3 \cdot 4, \dots, 2m(2m + 1).
$$
A move consists of choosing three numbers $a, b, c$, and replacing them with the single number
$$
\frac{abc}{ab + bc + ca}.
$$
After $m-1$ such moves, only two numbers will remain. Supposing one of these is $\frac{4}{3}$, show that the other exceeds 4.
