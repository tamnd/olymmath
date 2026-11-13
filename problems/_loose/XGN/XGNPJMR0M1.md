---
tag: XGNPJMR0M1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XXVII Olimpiada Matemática Rioplatense
---
By writing the digits $1$, $2$, $3$, $4$, $5$, $6$, $7$, $8$ and $9$ in the cells of a $3 \times 3$ board, without repetitions, $6$ numbers of $3$ digits each are formed: one in each row and one in each column. For instance, if the board is filled in like in this picture

| | Column 1 | Column 2 | Column 3 |
|---------|----------|----------|----------|
| Row 1 | 1 | 2 | 7 |
| Row 2 | 5 | 6 | 3 |
| Row 3 | 4 | 9 | 8 |

then the $6$ numbers are: $127$, $563$, $498$, $154$, $269$ and $738$.

We have to fill in the $3 \times 3$ board so that the number in the first row is a multiple of $2$, the number in the second row is a multiple of $3$, the number in the third row is a multiple of $4$, the number in the first column is a multiple of $5$, the number in the second column is a multiple of $6$, and the number in the third column is a multiple of $7$.

Determine all possible ways to fill in the board.
