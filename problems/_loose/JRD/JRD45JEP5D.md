---
tag: JRD45JEP5D
kind: problem
type: answer
answer: n \not\equiv 0 \pmod{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Lizzie and Alex are playing a game on the whiteboard. Initially, $n$ twos are written
on the board. On a player's turn they must either
1. change any single positive number to 0, or
2. subtract one from any positive number of positive numbers on the board.
The game ends once all numbers are 0, and the last player who made a move wins. If Lizzie
always plays first, find all $n$ for which Lizzie has a winning strategy.
