---
tag: 69BNKK3SPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h3479541
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2025
    source: hf-ai-mo-aops
    label: 2025 International Zhautykov Olympiad
---
Rose and Brunno play the game on a board shaped like a regular 1001-gon. Initially, all vertices of the board are white, and there is a chip at one of them. On each turn, Rose chooses an arbitrary positive integer $ k $, then Brunno chooses a direction: clockwise or counterclockwise, and moves the chip in the chosen direction by $ k $ vertices. If at the end of the turn the chip stands at a white vertex, this vertex is painted red.

Find the greatest number of vertices that Rose can make red regardless of Brunno's actions, if the number of turns is not limited.
