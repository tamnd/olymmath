---
tag: PJEVPP6RNR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $n \times n$ grid, there is exactly one strawberry in each column and one in each row, as well as one plum. For every rectangle having the top-left corner as a vertex, there are more plums than strawberries. We are allowed to change positions as follows: for a rectangle containing exactly two strawberries at the top-right and bottom-left (and no others), we move these two strawberries to the other two corners. Prove that it is possible to end up with a strawberry in every cell where there is a plum.
