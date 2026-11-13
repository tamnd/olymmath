---
tag: WNJRYAKGEV
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A 2-player game is played on $n\geq 3$ points, where no 3 points are collinear. Each move consists of selecting 2 of the points and drawing a new line segment connecting them. The first player to draw a line segment that creates an odd cycle loses. (An odd cycle must have all its vertices among the $n$ points from the start, so the vertices of the cycle cannot be the intersections of the lines drawn.) Find all $n$ such that the player to move first wins.
