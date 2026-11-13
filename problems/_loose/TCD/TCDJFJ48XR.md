---
tag: TCDJFJ48XR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $(m,n)$, $m\leq n$, such that there exists a table with $m$ rows and $n$ columns filled with the numbers 1 and 0, satisfying the following property: If in a cell there's a 0 (respectively a 1), then the number of zeros (respectively ones) in the row of this cell is equal to the number of zeros (respectively ones) in the column of this cell.
