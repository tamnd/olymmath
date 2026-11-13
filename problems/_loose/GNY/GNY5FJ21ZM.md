---
tag: GNY5FJ21ZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024467
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4338
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
In each square of a $101\times 101$ board, except the central one, is placed either a sign " turn" or a sign " straight". The chess piece " car" can enter any square on the boundary of the board from outside (perpendicularly to the boundary). If the car enters a square with the sign " straight" then it moves to the next square in the same direction, otherwise (in case it enters a square with the sign " turn") it turns either to the right or to the left ( its choice). Can one place the signs in such a way that the car never enter the central square?
