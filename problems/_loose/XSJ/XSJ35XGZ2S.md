---
tag: XSJ35XGZ2S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18870
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a large table, 2020 cells are marked (in each column and each row, no more than one cell is marked), and there are no marked cells in the top row and the leftmost column. Sergei wants to paint these cells red and blue so that to the right of any column of the table, the number of red cells differs from the number of blue cells by no more than 1, and below any row, the number of red cells differs from the number of blue cells by no more than 1 as well. Is it true that for any arrangement of the cells, Sergei will be able to do this?
