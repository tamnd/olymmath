---
tag: S21XBX25XN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On each cell of a $9 \times 9$ board, there is a beetle. At a whistle, each beetle moves to one of the diagonally adjacent cells. As a result, some cells may end up with more than one beetle, while some cells may remain unoccupied.

Prove that in this case, there will be at least 9 unoccupied cells.
