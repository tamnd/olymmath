---
tag: 256JPNVJBR
kind: problem
type: answer
answer: a_n = F_{n+3} - 2, where F_0 = 0 and F_1 = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=61
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We order the positive integers in two rows in the following manner:
1 3 6 11 19 32 53 ...
2 4 5 7 8 9 10 12 13 14 15 16 17 18 20 to 31 33 to 52 54 ...
We first write $1$ in the first row, $2$ in the second and $3$ in the first. After this, the following integers are written in such a way that an individual integer is always added in the first row and blocks of consecutive integers are added in the second row, with the leading number of a block giving the number of (consecutive) integers to be written in the next block.
We name the numbers in the first row $a_1, a_2, a_3, \dots$
Determine an explicit formula for $a_n$.
G. Baron, Vienna
