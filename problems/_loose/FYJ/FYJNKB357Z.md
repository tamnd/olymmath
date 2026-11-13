---
tag: FYJNKB357Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$S$ is a board containing all unit squares in the $xy$ plane whose vertices have integer coordinates and which lie entirely inside the circle $x^2 + y^2 = 1998^2$. In each square of $S$ is written $+1$. An allowed move is to change the sign of every square in $S$ in a given row, column or diagonal. Can we end up with exactly one $-1$ and $+1$ on the rest squares by a sequence of allowed moves?
