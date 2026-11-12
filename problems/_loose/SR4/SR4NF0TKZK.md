---
tag: SR4NF0TKZK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On each cell of a chessboard, there is a stack of several chips. In one move, one of the two operations is allowed:

- remove one chip from each stack in any vertical column;
- double the number of chips in each stack in any horizontal row.

Is it possible to clear the entire board of chips in some number of such operations?
