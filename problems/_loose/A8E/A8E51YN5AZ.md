---
tag: A8E51YN5AZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a white table with $2$ rows and $5$ columns , and would like to colour all cells of the table according to the following rules:

$\bullet$ We must colour the cell in the bottom left corner first.
$\bullet$ After that, we can only colour a cell if some adjacent cell has already been coloured. (Two cells are adjacent if they share an edge.)

How many different orders are there for colouring all $10$ squares (following these rules)?
