---
tag: 63NEYYDYNT
kind: problem
type: answer
answer: Ana wins if n ≡ 3, 4, 5 (mod 6) and also when n = 7; otherwise Bine wins.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
First $n$ positive integers are written on the whiteboard. Ana and Bine are playing a game. In each move one of the players must erase 3 numbers whose average value is an integer. Ana starts and then they take turns after each move. The player that can not make a move loses. Determine who has the winning strategy and justify the answer.
