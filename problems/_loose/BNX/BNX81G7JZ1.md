---
tag: BNX81G7JZ1
kind: problem
type: answer
answer: (2n + 1) * C(2n, n - 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=65
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic Czech and Slovak Mathematical Olympiad
---
For a given natural number $n$ specify the number of paths of length $2n + 2$ from point $[0, 0]$ to the point $[n, n]$ which do not pass any point more than once. Path of length $2n + 2$ connecting points $[0, 0]$ and $[n, n]$ means $(2n + 2)$-tuple
$$
(A_0A_1, A_1A_2, A_2A_3, \dots, A_{2n+1}A_{2n+2})
$$
of line segments connecting two adjacent lattice points, while $A_0 = [0, 0]$, $A_{2n+2} = [n, n]$. (Pavel Novotný)
