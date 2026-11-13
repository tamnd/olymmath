---
tag: QTZXK5909B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the fields of a rectangular board $n \times m (n, m \geqslant 2)$ be colored black, while the rest of the fields are white. Outside the board, there is a frog that at one moment jumps onto some edge field of the board, and then performs a series of jumps, each time jumping to one of the adjacent fields. (We say that two fields are adjacent if they share a side.) Each time the frog lands on a field, the color of that field changes, from white to black or vice versa.

Is there a path the frog can take to leave the board by jumping from an edge field so that after that all fields are black?
