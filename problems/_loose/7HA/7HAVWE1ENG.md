---
tag: 7HAVWE1ENG
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a point $R$ on a line, there is a robot that moves along this line to the left or right as it wishes. It is programmed to take 2 steps on the first move, 4 steps on the second move, 6 steps on the third move, and in general, $2n$ steps on the $n$-th move.

a) Describe a variant of the robot's movement such that it starts from point $R$ and ends its movement at point $R$ after exactly 4 moves.

b) What is the minimum number of moves the robot must make so that it starts from point $R$ and ends up back at $R$ at the end of its movement?

c) Prove that there is a variant of the robot's movement such that it starts from $R$ and ends up at $R$ after 179 moves.
