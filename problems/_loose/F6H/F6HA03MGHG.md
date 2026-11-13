---
tag: F6HA03MGHG
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Marwan has chosen 8 cells of the chessboard $8 \times 8$ such that no two lie on the same line or in the same row (we call it general configuration). On each step Hamza chooses 8 cells in general configuration and puts coins on them. Then Marwan shows all coins that are out of cells chosen by Marwan. If Marwan shows even number of coins then Hamza wins, otherwise Hamza removes all coins and makes the next move. Find the minimal number of moves that Hamza needs to guarantee the win (Hamza$>$Marwan).
