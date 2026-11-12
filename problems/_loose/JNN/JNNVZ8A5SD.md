---
tag: JNNVZ8A5SD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $n \times n$ square. Initially, its cells are painted in white and black in a checkerboard pattern, with at least one of the corner cells being black. In one move, it is allowed to simultaneously repaint the four cells in some $2 \times 2$ square according to the following rule: each white cell is repainted black, each black cell is repainted green, and each green cell is repainted white. For which $n$ can one obtain a checkerboard pattern where black and white colors have swapped places after several moves?

(B. Truhin)
