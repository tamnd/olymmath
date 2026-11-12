---
tag: 8B4PNT7MF2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A labyrinth is called a 10*10 grid, some pairs of adjacent nodes in which are connected by a segment - a "wall" in such a way that by moving from one cell to an adjacent one along a side and not passing through walls, one can visit all cells of the square. The boundary of the square will also be considered to be surrounded by a wall. In some cell of some labyrinth, a robot is standing. It understands 4 commands - L, R, U, D, according to which it moves left, right, up, and down, respectively, and if there is a "wall" in front of it, it stays in place. How to write a program for the robot, executing which it will visit all cells regardless of the labyrinth and its initial position
