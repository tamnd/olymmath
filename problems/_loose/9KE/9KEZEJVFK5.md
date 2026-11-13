---
tag: 9KEZEJVFK5
kind: problem
type: answer
answer: All even n that are not of the form 2^(2k+1).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=6
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
There are $n$ candies on the table. On every turn, a player eats a number of candies that is greater than $1$ and divides the number of candies on the table at the start of the turn, but must leave at least $1$ candy on the table. Two players take alternate turns and the player who is unable to make a move loses. Find all positive integers $n$ for which the first player can always win.
