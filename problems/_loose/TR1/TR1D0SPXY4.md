---
tag: TR1D0SPXY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $1\times 2019$ board is filled with numbers $1, 2, \dots, 2019$ in an increasing order. In each step, three consecutive tiles are selected, then one of the following operations is performed:

$\text{(i)}$ the number in the middle is increased by $2$ and its neighbors are decreased by $1$, or

$\text{(ii)}$ the number in the middle is decreased by $2$ and its neighbors are increased by $1$.

After several such operations, the board again contains all the numbers $1, 2,\dots, 2019$.
Prove that each number is in its original position.
