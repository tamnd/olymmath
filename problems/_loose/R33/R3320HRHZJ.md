---
tag: R3320HRHZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Chess pieces are placed on certain integer points in the coordinate plane, with at most one chess piece on each integer point. Chess pieces can be moved according to the following rule: a chess piece can jump over an adjacent integer point that has a chess piece on it, along a horizontal or vertical line, to the next integer point (provided that point is empty; otherwise, it is not allowed).

Initially, all chess pieces are on or below the $x$-axis. Can a chess piece be moved to the line $y=5$ after several moves?
