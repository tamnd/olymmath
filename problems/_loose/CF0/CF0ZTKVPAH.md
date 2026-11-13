---
tag: CF0ZTKVPAH
kind: problem
type: answer
answer: "43"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are numbering the rows and columns of a $29 \text{x} 29$ chess table with numbers $1, 2, ..., 29$ in order (Top row is numbered with $1$ and first columns is numbered with $1$ as well). We choose some of the squares in this chess table and for every selected square, we know that there exist at most one square having a row number greater than or equal to this selected square's row number and a column number greater than or equal to this selected square's column number. How many squares can we choose at most?
