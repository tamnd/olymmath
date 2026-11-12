---
tag: B2MEREBEGD
kind: problem
type: answer
answer: "1300"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36851
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The city has the appearance of a square grid $100 \times 100$ with the side of each cell being 500 m. Along each side of each cell, one can move only in one direction. It is known that one can travel no more than 1 km through the city without violating the movement rules.

Prove that there will be no fewer than 1300 intersections from which it is impossible to exit without violating the movement rules. (The corners of the city are also considered intersections.)
