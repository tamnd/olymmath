---
tag: 1V7WPHX0RF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game tic-tac is played on a $3$ by $3$ square grid between players $X$ and $O$. They take turns, and on their turn a player writes their symbol onto one empty space of the grid. A player wins if they fill a row or column with three copies of their symbol; a player filling a main diagonal does *not* end the game in a win for that player. If the grid is filled without determining the winner, the game is a draw. Assuming player $X$ goes first and the players draw the game, how many possibilities are there for the final state of the grid?

$\text{(A) }24 \text{(B) }33 \text{(C) }36 \text{(D) }45 \text{(E) }126$
