---
tag: GZ4D7APXH6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a grid $2 \times 100$, each grid square is colored either red or blue, in such a way that :
$\bullet$ There exists at least one grid square colored red, and at least one colored blue.
$\bullet$ All grid squares colored red are connected, and so are all grid squares colored blue.
How many possibilities are there for such colorings?
Note that two distinct grid squares are considered to be connected when they share an edge.
