---
tag: W6S04YY8MT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a checkered board $2m \times 2n$, $m, n \in \mathbb{Z}_{>0}$. A stone is placed on one of the unit squares on the board, this square is different from the upper right square and from the lower left square. A snail goes from the bottom left square and wants to get to the top right square, walking from one square to other adjacent, one square at a time (two squares are adjacent if they share an edge).
Determine all the squares the stone can be in so that the snail can complete its path by visiting each square exactly one time, except the square with the stone, which the snail does not visit.
