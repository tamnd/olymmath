---
tag: RXRGQ5SR0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Given a grid $2n$ by $2n$, color exactly $2n^2$ squares satisfying the condition that :
if a given square is colored, then the other squares that share only a single vertex (i.e., not a whole edge) with that square aren't colored.
How many possibilities are there coloring in such a way?
Note that two colorings are considered to be distinct if they differ by a rotation or reflection of the square.
