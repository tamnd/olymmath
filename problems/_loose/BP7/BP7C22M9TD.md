---
tag: BP7C22M9TD
kind: problem
type: answer
answer: If\the\area\of\the\original\rectangle\is\odd,\the\first\player\wins;\if\it\is\even,\the\\player\wins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players are playing a game. Initially, they have a rectangular sheet of paper of size $m \times n$, where $m$ and $n$ are natural numbers greater than 1. The players take turns. On each turn, a player cuts the existing rectangle into two, one of which has an area of 1, and discards the rectangle of unit area. The player loses if, after their move, the remaining rectangle has a side length strictly less than 1 or if a 1x1 square remains. Who will win with correct play: the one who moves first, or their partner, - and how should they play to win?
