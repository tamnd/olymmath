---
tag: TSM9SB3FVP
kind: problem
type: answer
answer: 12k^{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be a positive integer. Each cell of a $3 k \times 3 k$ grid is colored either red or blue. A triple of cells $\left(C_{1}, C_{2}, C_{3}\right)$ is called a good cell group if $C_{1}$ and $C_{2}$ are in the same row, $C_{2}$ and $C_{3}$ are in the same column, and $C_{1}, C_{3}$ are colored blue, while $C_{2}$ is colored red. Find the maximum possible number of good cell groups.
