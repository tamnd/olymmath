---
tag: 7P0MYP2REX
kind: problem
type: answer
answer: "60"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16587
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sasha drew a square of size $6 \times 6$ cells and alternately colors one cell at a time. After coloring the next cell, he writes down the number of colored cells adjacent to it. After coloring the entire square, Sasha adds up the numbers written in all the cells. Prove that no matter in what order Sasha colors the cells, he will end up with the same sum. (Cells are considered adjacent if they share a common side.)
