---
tag: X10VP9THP0
kind: problem
type: answer
answer: 1+\frac{1}{}with1\leq\leq1010
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r>1$ be a rational number. Alice plays the following game. Initially, on the real line, there is a red pawn at 0 and a blue one at 1. On each turn, Alice chooses an integer $k$, and notes $x, y$ as the positions of the two pawns in the order she wants. She then moves the pawn at $y$ to $y'$ such that $y'-x=r^k(y-x)$. Alice wins if she can move the red pawn to 1 in at most 2021 moves.

For which $r$ can Alice win?
