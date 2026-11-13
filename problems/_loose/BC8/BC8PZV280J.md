---
tag: BC8PZV280J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a $4 \times 4$ squared board. We define the *separation * between two squares as the least number of moves that a chess knight must take to go from one square to the other (using moves of the knight). Three boxes $A, B, C$ form a good trio if the three separations between $A$ and $B$, between $A$ and $C$ and between $B$ and $C$ are equal. Determines the number of good trios that are formed on the board.

Clarification: In each move the knight moves $2$ squares in the horizontal direction plus one square in the vertical direction or moves $2$ squares in the vertical direction plus one square in the horizontal direction.
