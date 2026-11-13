---
tag: 2QKNSD2HJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cube of dimension $3 \times 3 \times 3$ is divided into 27 unit cells in the shape of a cube. One of the resulting cells is empty, while each of the remaining cells contains a unit cube labeled with one of the numbers $1,2, \ldots, 26$ (each of these numbers is assigned to exactly one cube). It is allowed to move a unit cube to an adjacent empty cell (two cells are adjacent if they share a face). Can the unit cubes be rearranged using a finite number of allowed moves so that the cubes labeled with numbers $k$ and $27-k$ swap places, for every $k \in\{1,2, \ldots, 13\}$?

(Bulgaria)
