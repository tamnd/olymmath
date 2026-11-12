---
tag: QP0Q1QNCER
kind: problem
type: answer
answer: A-4,B-1,C-3,D-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $4 \times 4$ table is divided into four $2 \times 2$ squares.

Vika wrote 4 ones, 4 twos, 4 threes, and 4 fours in the cells of the table such that in each column, each row, and each $2 \times 2$ square, all numbers are different.

The hooligan Andrey erased some of the numbers. Help Vika restore which cells contained fours.

| | 1 | 2 | 3 | 4 | |
| :--- | :--- | :--- | :--- | :--- | :--- |
| | | | | | |
| | | | | | |
| | | | 3 | | |
| | | | | 3 | |
| | 2 | | | 1 | |
| | 1 | | | 1 | |

Construct the correspondence

- In row $A$, the four is in
- In row $B$, the four is in
- In row $C$, the four is in
- In row $D$, the four is in
- column 1.
- column 2.
- column 3.
- column 4.
