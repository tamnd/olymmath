---
tag: SNMGJMJBS3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=70
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
In each unit cell of a $n \times m$ table an integer number is written. An **diagonal** is formed by those cells of the table for which the difference between their column number and their row number is a constant number. We want to make all the numbers in the table $0$ during a finite number of steps. In each step, we can select a row, a column or a diagonal and add $1$ or $-1$ to the number in every cell of it. Prove that if we can make all the numbers in each $3 \times 3$ subtable $0$ without altering the rest of the table, then we can make all the numbers in the table $0$.

For example, in the $5 \times 9$ table below, cells of a diagonal and also cells of a $3 \times 3$ subtable are shown. Note that the rightmost upper cell (row $1$, column $9$) is also considered a diagonal.

| | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | ♣ | | | |
| 2 | | ◇ | ◇ | ◇ | | | ♣ | | |
| 3 | | ◇ | ◇ | ◇ | | | | ♣ | |
| 4 | | ◇ | ◇ | ◇ | | | | | ♣ |
| 5 | | | | | | | | | |
