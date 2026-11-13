---
tag: SKKS2K6DM1
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a table $4\times 4$ we put $k$ blocks such that
i) Each block covers exactly 2 cells
ii) Each cell is covered by, at least, one block
iii) If we delete a block; there is, at least, one cell that is not covered.
Find the maximum value of $k$.
Note: The blocks can overlap.
