---
tag: KA1CSYQZE6
kind: problem
type: answer
answer: Pete (the first player) has a winning strategy.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XL Russian mathematical olympiad
---
Pete and Basil play the following game on a checkered $n \times n$ board. Initially the whole board is white except for one corner square which is black; a rook is put onto this square. The players move alternately, Pete moves first. On each turn, a player moves a rook to another square horizontally or vertically. Immediately after that, all the squares passed by a rook (including the square where the move results) become black. It is prohibited to move a rook to or across any black square. The player who cannot move loses. Which of the players has a winning strategy? (N. Polyansky)
