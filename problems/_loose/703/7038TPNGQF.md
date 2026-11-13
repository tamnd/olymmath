---
tag: 7038TPNGQF
kind: problem
type: answer
answer: \langle0,\frac{1}{\varphi}\rangle\cup{1}\cup\langle\varphi,+\infty\rangle
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two natural numbers are written on the board. Two players play a game, taking turns to change the numbers on the board.

If at some point the numbers on the board are $A$ and $B (A \geqslant B)$, the player whose turn it is chooses a natural number $k$ such that $A - kB \geqslant 0$, erases the number $A$, and writes the number $A - kB$ in its place. The player who writes the number 0 on the board wins.

For which values of the ratio of the two initial numbers on the board can the first player always win, regardless of the second player's moves?
