---
tag: 94YMZEPGEK
kind: problem
type: answer
answer: "4013"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90336
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=35
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a multiplication table to be a rectangular array in which every row is labeled with a different positive integer, every column is labeled with a different positive integer, and every cell is labeled with the product of its row and column numbers, for instance:

| $\times$ | 2 | 6 | 4 | 3 |
| :---: | :---: | :---: | :---: | :---: |
| 2 | 4 | 12 | 8 | 6 |
| 1 | 2 | 6 | 4 | 3 |
| 3 | 6 | 18 | 12 | 9 |

The above table is $3 \times 4$ but contains only 8 distinct products. What is the minimum number of distinct products in a $2012 \times 2012$ multiplication table?
