---
tag: SRH99W2BVN
kind: problem
type: answer
answer: n ≡ 0 or 3 (mod 4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-mathnet
    label: Romania SELECTION TESTS FOR THE 2019 BMO AND IMO
---
Alice and Bob are given an integer $n \ge 2$ and a token to play the following game. Initially, Alice chooses an order of the numbers $1, 2, \dots, n$, and writes them down in a row, in that order, on a sheet of paper. Next, Bob chooses one of these numbers and places the token on that number. Continuing, Alice moves the token on one of the neighbouring numbers, then Bob moves the token on one of the neighbouring numbers of the current position, and so on and so forth in turns. For each $k$ in the range $1, 2, \dots, n$, the token may be placed on number $k$ at most $k$ times; Bob's first move is counted. The player who can no longer move the token loses. Determine the values of $n$ for which Alice has a winning strategy.

Mathematical Olympiad Rioplatense, 2010, Level 3
