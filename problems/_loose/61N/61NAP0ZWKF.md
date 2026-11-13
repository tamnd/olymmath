---
tag: 61NAP0ZWKF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a table of size $n \times n$ self-describing if each cell of the table contains the total number of even numbers in its row and column other than itself. How many self-describing tables of size
a) $3 \times 3$ exist?
b) $4 \times 4$ exist?
c) $5 \times 5$ exist?
Two tables are different if they differ in at least one cell.
