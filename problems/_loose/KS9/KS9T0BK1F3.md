---
tag: KS9T0BK1F3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the plane, all points with integer coordinates $(x, y)$ such that $x^{2}+y^{2} \leq 1010$ are marked. Two players play a game (taking turns). On the first move, the first player places a token on some marked point and erases it. Then, on each subsequent move, a player moves the token to another marked point and erases it. In doing so, the lengths of the moves must always increase; additionally, it is forbidden to move from a point to one that is symmetric to it relative to the center. The player who cannot make a move loses. Which of the players can ensure their victory, regardless of how their opponent plays?
