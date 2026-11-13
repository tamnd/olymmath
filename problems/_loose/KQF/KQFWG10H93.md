---
tag: KQFWG10H93
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=70371
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a grid board with 2012 rows and $ k > 2 $ columns, a chip is placed in some cell of the leftmost column. Two players take turns moving the chip. On a turn, a player can move the chip one cell to the right, up, or down, but the chip cannot be moved to a cell it has already visited. The game ends when one of the players moves the chip to the rightmost column. However, it is only at the moment when the chip reaches the second-to-last column (the second from the right) that the players are informed whether the player who moved the chip to the rightmost column will be the winner or the loser. Can one of the players ensure a win?
