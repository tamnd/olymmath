---
tag: FBSTS6GW0M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed natural number. The maze is a grid of dimensions $n \times n$, with a gate to the sky on one of the squares and some adjacent squares with partitions separated from each other so that it is still possible to move from one square to another. The program is in the UP, DOWN, RIGHT, LEFT final sequence, With each command, the Creature moves from its current square to the corresponding neighboring square, unless the partition or the outer boundary of the labyrinth prevents execution of the command (otherwise it does nothing), upon entering the gate, the Creature moves on to heaven. God creates a program, then Satan creates a labyrinth and places it on a square. Prove that God can make such a program that, independently of Satan's labyrinth and selected from the source square, the Creature always reaches heaven by following this program.
