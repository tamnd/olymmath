---
tag: 5TBPAESA65
kind: problem
type: answer
answer: "28800"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each permutation $x_1, x_2, \dots, x_{10}$ of $1, 2, \dots, 10$, compute
$$
|2x_1 - 3x_2| + |2x_2 - 3x_3| + |2x_3 - 3x_4| + \dots + |2x_{10} - 3x_1|.
$$
Let $S$ be the maximum possible value of this sum. Find the number of permutations attaining $S$.
