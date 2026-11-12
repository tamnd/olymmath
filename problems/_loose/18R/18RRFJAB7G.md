---
tag: 18RRFJAB7G
kind: problem
type: answer
answer: "40"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15285
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $5 \times 5$ square grid of cells. In one move, you can write a number in any cell, equal to the number of cells adjacent to it by side that already contain numbers. After 25 moves, each cell will contain a number. Prove that the value of the sum of all the resulting numbers does not depend on the order in which the cells are filled.
