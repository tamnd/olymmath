---
tag: S548NXFM1W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a row, there are 2012 plates numbered from 1 to 2012. On the $k$-th plate, there are exactly $k$ nuts. Two players are playing a game. On a turn, a player is allowed to move any number (not less than one) of nuts from the $m$-th plate to the ($m-1$)-th plate (where $m$ is chosen from 2 to 2012 at the player's discretion), or to take any number (also not less than one) of nuts from the first plate. The player who cannot make a move loses. Who will win with correct play?
