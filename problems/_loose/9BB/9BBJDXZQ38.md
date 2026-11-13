---
tag: 9BBJDXZQ38
kind: problem
type: answer
answer: r = 2n if n is even; r = 2n + 1 if n is odd
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=6
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong 1997-2023 IMO HK TST
---
Let $n$ be a positive integer larger than or equal to $2$. On an $n \times n$ chessboard, $r$ chess pieces have been placed such that
(i) there is at least one chess piece in each row;
(ii) there is at least one chess piece in each column; and
(iii) there is at least one chess piece in each diagonal (here a 'diagonal' refers to the collection of cells whose centres lie on a straight line which makes an angle of $45^\circ$ with a side of the chessboard). (For instance, in the $3 \times 3$ chessboard, the $1 \times 1$ cell forms a diagonal; the $1 \times 2$ cell and the $2 \times 1$ cell together form a diagonal; the $1 \times 1$ cell, $2 \times 2$ cell and the $3 \times 3$ cell also form a diagonal (a main diagonal), etc.)
Find, in terms of $n$, the smallest possible value of $r$.
