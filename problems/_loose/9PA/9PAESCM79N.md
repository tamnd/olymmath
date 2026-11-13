---
tag: 9PAESCM79N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two people, A and B, are playing a game. They take turns: when it's A's turn, he marks any point on the plane that he hasn't marked before. Then, B colors this point either white or black. If after B colors the point, there does not exist any straight line such that all the black points are on one side of the line and all the white points are on the other side, then B wins.
(1) Prove: A has a strategy to ensure B cannot win;
(2) If A can only mark integer points (placing the plane in a Cartesian coordinate system, where both the x and y coordinates are integers), can B always guarantee a win regardless of how A operates?
