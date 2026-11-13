---
tag: MPQ72JBB2G
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider numbers of two or more digits where none of the digits is 0. We call such a number thirteenish if every two adjacent digits form a multiple of 13. For example, 139 is thirteenish because $13=1 \times 13$ and $39=3 \times 13$.

How many thirteenish numbers of five digits are there?
