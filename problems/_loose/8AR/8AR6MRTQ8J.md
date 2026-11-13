---
tag: 8AR6MRTQ8J
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145388
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $9 \times 9$ grid, each small square is colored either black or white, such that the number of black squares adjacent to each white square is greater than the number of white squares, and the number of white squares adjacent to each black square is greater than the number of black squares (squares sharing a common edge are considered adjacent), find the maximum difference in the number of black and white squares in such a coloring method.
