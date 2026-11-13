---
tag: NMRTV443GF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $5 \times 5$ square grid, place a "-" in one of the cells, and fill the rest of the cells with "+" signs. Each time, you are allowed to select any $k \times k (2 \leqslant k \leqslant 5)$ subgrid and change the signs of all cells within it. Try to determine in which cell the "-" sign should be placed initially so that it is possible to make all the signs in the grid "+" after several such sign changes.
