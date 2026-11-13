---
tag: F98JZ4DARZ
kind: problem
type: answer
answer: b) No
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=1
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Mathematical Olympiad
---
Let $n$ and $m$ be positive integers, $n \ge m$. There is a game board of size $1 \times n$ divided into $n$ unit squares and an unlimited supply of sticky tapes of size $1 \times m$. On each move, any player adds a tape covering $m$ consecutive unit squares on the board precisely, at least one of which is not yet covered by any tape. Two players move alternately and the one who can make no move loses.

a) Prove that if $n$ and $m$ are of equal parity then the first player can win regardless of how the opponent plays.

b) Is it true that, whenever $n$ and $m$ are of different parity, the second player can win regardless of how the first player plays?
