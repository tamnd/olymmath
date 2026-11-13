---
tag: 6T3CNEQ2X3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $3 \times 3$ square is given with numbers written in each $1 \times 1$ cell. The allowed moves are to choose a row, a column, or a diagonal and add or subtract 1 from the three numbers in it. Prove that it is not possible to start with the numbers in the configuration on the left and reach the numbers in the configuration on the right after some operations.

| 0 | 1 | 0 |
| :--- | :--- | :--- |
| 1 | 0 | 1 |
| 0 | 1 | 0 |

| 1 | 0 | 1 |
| :--- | :--- | :--- |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
