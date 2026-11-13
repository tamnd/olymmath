---
tag: DNQWG4NCAP
kind: problem
type: answer
answer: \neqn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a certain two-player game, you start with a rectangular $m \times n$ grid of squares. On each turn, a player either makes a horizontal cut and takes away the portion of the rectangle above the cut, or makes a vertical cut and takes away the portion to the right. Whichever player takes the last square (in the bottom left corner) loses. If both players play perfectly, determine for which values of $m$ and $n$ the first player will win.
