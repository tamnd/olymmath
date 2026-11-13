---
tag: FYA9ANJKVF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=183
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
Juku and Miku are playing the following game. In the beginning, there is a positive integer on the board. Each turn, a player subtracts from the number on the board a non-zero digit that appears in his or his opponent's ID code, and replaces the number on the board with the result. Players take turns, Juku starts. The player whose move ends up in a negative number on the board loses. Prove that, among any 10 consecutive positive integers, there is a number $n$ such that, if initially the number $n$ is on the board, then Juku can win the game regardless of his opponent's counterplay.
