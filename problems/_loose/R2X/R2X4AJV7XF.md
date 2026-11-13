---
tag: R2X4AJV7XF
kind: problem
type: answer
answer: C(n+1, 3) + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=375
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $n$ be a positive integer such that $n \ge 4$. For every permutation $(s_1, s_2, \dots, s_n)$ of the numbers $1, 2, \dots, n$, we calculate the following expression and write the result on the board:
$$
1s_1 + 2s_2 + 3s_3 + \dots + ns_n
$$
In the end, how many distinct values will be written on the board?
