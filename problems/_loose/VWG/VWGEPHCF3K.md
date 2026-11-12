---
tag: VWGEPHCF3K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n>1$. Two players take turns marking points on a circle: the first one in red, the second one in blue (marking the same point twice is not allowed). When $n$ points of each color have been marked, the game ends. After that, each player finds the longest arc on the circle with endpoints of their own color, on which there are no other marked points. The player with the longer found length wins (in case of equal lengths of the arcs, as well as in the absence of such arcs for both players - it's a draw). Which of the players can always win, regardless of how the opponent plays?
