---
tag: A1NTXXAJ24
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220454
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $9\times 9$ table is filled with zeroes.In every step we can either take a row add $1$ to every cell and shift it one unit to right or take a column reduce every cell by $1$ and shift it one cell down. Can the table with the top right $-1$ and bottom left $+1$ and all other cells zero be reached?
