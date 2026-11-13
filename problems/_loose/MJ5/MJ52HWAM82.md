---
tag: MJ52HWAM82
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The fields of a board of dimensions $N \times N$ are painted black and white such that fields that share a common side are of different colors and such that at least one field in the corner of the board is black. In a single step, a $2 \times 2$ square is selected, and all four fields within this square change color so that white fields become black, black fields become gray, and gray fields become white.

Determine all natural numbers $N>1$ for which it is possible to achieve, with a finite sequence of the described steps, that all fields that were initially black are white and all fields that were initially white are black.
