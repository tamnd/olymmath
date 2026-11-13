---
tag: Q25KBJT6EK
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players $A$ and $B$ play a game with a ball and $n$ boxes placed onto the vertices of a regular $n$-gon where $n$ is a positive integer. Initially, the ball is hidden in a box by player $A$. At each step, $B$ chooses a box, then player $A$ says the distance of the ball to the selected box to player $B$ and moves the ball to an adjacent box. If $B$ finds the ball, then $B$ wins. Find the least number of steps for which $B$ can guarantee to win.
