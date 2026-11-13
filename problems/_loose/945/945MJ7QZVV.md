---
tag: 945MJ7QZVV
kind: problem
type: answer
answer: If\+n\is\even,\the\\player\wins;\if\+n\is\odd,\the\first\player\wins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69994
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A rectangular grid of $m \times n$ cells is made of strings of unit length. Two players take turns. In one move, a player can cut (in the middle) an uncut unit string. If there are no closed string contours left, the player who made the last move is considered the loser. Which player will win with correct play, and how should they play to win?
