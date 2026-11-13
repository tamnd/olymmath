---
tag: 7GZ9VQVZJH
kind: problem
type: answer
answer: D
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The first four rows of a table with columns $V, W, X$, $Y$, and $Z$ are shown. For each row, whenever integer $n$ appears in column $V$, column $W$ contains the integer $2 n+1$, column $X$ contains $3 n+1$, column $Y$ contains $5 n+1$, and column $Z$ contains $7 n+1$. For every row after the first, the number in column $V$ is the smallest positive integer that does not yet appear in any previous row. The

| $V$ | $W$ | $X$ | $Y$ | $Z$ |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 3 | 4 | 6 | 8 |
| 2 | 5 | 7 | 11 | 15 |
| 9 | 19 | 28 | 46 | 64 |
| 10 | 21 | 31 | 51 | 71 |

integer 2731 appears in column $W$. The complete list of columns in which 2731 appears is

(A) $W$

(B) $W, X, Y$, and $Z$

(C) $W, X$ and $Z$

(D) $W, Y$ and $Z$

(E) $W$ and $Z$
