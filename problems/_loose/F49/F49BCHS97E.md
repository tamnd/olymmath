---
tag: F49BCHS97E
kind: problem
type: answer
answer: "21"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Théo places tokens in the cells of a $30 \times 30$ grid while following these rules:

$\triangleright$ Each cell contains at most one token.

$\triangleright$ For each empty cell, there is, among the cells in the same row or the same column, at least one cell containing a token.

$\triangleright$ For each token, there is, among the cells in the same row or the same column, at most one other cell containing a token.

Determine the smallest integer $k$ satisfying the following property: regardless of the arrangement chosen by Théo, each $k \times k$ square of the grid contains at least one cell with a token.
