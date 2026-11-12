---
tag: W6E41JZGHV
kind: problem
type: answer
answer: "9800"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On some cells of a rectangular board of size 101 by 99, there is one turtle each. Every minute, each of them simultaneously crawls to one of the cells adjacent to the one they are in, by side. In doing so, each subsequent move is made in a direction perpendicular to the previous one: if the previous move was horizontal - to the left or right, then the next one will be vertical - up or down, and vice versa. What is the maximum number of turtles that can move around the board indefinitely such that at each moment, no more than one turtle is in any cell?
