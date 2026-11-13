---
tag: DG412HTZBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83949
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(solved by Philippe Cloarec). Two players play the following game. They have a rectangular piece of paper $n \times m$ with a grid. Taking turns, each player chooses a node from the grid inside the rectangle, or on its left or bottom edge. They shade the squares of the rectangle that are located above and to the right of the chosen node. Then they pass the rectangle to the other player. Each move, each player is required to shade at least one square that has not been shaded before. The player who shades the last square of the rectangle loses. Which of the two players has a winning strategy?
