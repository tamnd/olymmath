---
tag: QMNGA8ZWQW
kind: problem
type: answer
answer: Ali can force a win exactly when N = 2^n with n odd, or when N = t·2^n with n even and odd t > 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer. Ali and Hadi play a game in which they start by writing the numbers $1, 2, \dots, N$ on a board. They then take turns to make a move, starting with Ali. Each move consists of choosing a pair of integers $(k, n)$, where $k \ge 0$ and $n$ is one of the integers on the board, and then erasing every integer $s$ on the board such that $2^k|n - s$. The game continues until the board is empty. The player who erases the last integer on the board loses.
Determine all values of $N$ for which Ali can ensure that he wins, no matter how Hadi plays.
