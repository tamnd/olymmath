---
tag: H64F68QQNV
kind: problem
type: answer
answer: (x, y) ∈ {(1, 2017), (2017, 1), (2, 2016), (2016, 2), (1009, 1009)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=84
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 58th Ukrainian National Mathematical Olympiad
---
Find pairs of positive integers $x, y$, which satisfy the system of equations:
$$
\begin{cases}
[x, y] + (x, y) = 2018, \\
x + y = 2018,
\end{cases}
$$
Where $[x, y]$ and $(x, y)$ are LCM and GCD of numbers $x, y$.
