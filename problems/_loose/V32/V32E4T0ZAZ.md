---
tag: V32E4T0ZAZ
kind: problem
type: answer
answer: (n+1)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Mictlán is an $n\times n$ board and each border of each $1\times 1$ cell is painted either purple or orange. Initially, a catrina lies inside a $1\times 1$ cell and may move in four directions (up, down, left, right) into another cell with the condition that she may move from one cell to another only if the border that joins them is painted orange. We know that no matter which cell the catrina chooses as a starting point, she may reach all other cells through a sequence of valid movements and she may not abandon the Mictlán (she may not leave the board). What is the maximum number of borders that could have been colored purple?

*Proposed by CDMX*
