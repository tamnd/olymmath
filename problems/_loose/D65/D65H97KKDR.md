---
tag: D65H97KKDR
kind: problem
type: answer
answer: All positive integers except 1 and 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo
    source: hf-mathnet
    label: China China Western Mathematical Olympiad
---
Find all positive integers $n$ such that there exist non-zero integers $x_1, x_2, \dots, x_n, y$, satisfying the following conditions
$$
\begin{cases} x_1 + \cdots + x_n = 0, \\ x_1^2 + \cdots + x_n^2 = n y^2. \end{cases}
$$
