---
tag: Y0YGV31EJ7
kind: problem
type: answer
answer: "36"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A robot is located in one of the cells of an infinite grid paper, to which the following commands can be given:

- up (the robot moves to the adjacent cell above);
- down (the robot moves to the adjacent cell below);
- left (the robot moves to the adjacent cell to the left);
- right (the robot moves to the adjacent cell to the right).

For example, if the robot executes a sequence of four commands (up, right, down, left), it will obviously return to the initial position, i.e., it will end up in the same cell from which it started. How many different sequences of 4 commands exist that return the robot to its initial position?
