---
tag: ZBBSFNR3Z1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play the following game: the first writes down letters A or B in a row as they wish (from left to right, one after another; one letter per move), and the second, after each move of the first, swaps any two of the written letters or does nothing (this also counts as a move). After both players have made 1999 moves, the game ends. Can the second player play in such a way that, regardless of the first player's actions, the result is a palindrome (i.e., a word that reads the same from left to right and from right to left)?
