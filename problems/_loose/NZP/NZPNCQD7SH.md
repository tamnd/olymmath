---
tag: NZPNCQD7SH
kind: problem
type: answer
answer: "802"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18011
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a rectangular grid of cells. It is known that:

- there are exactly 940 ways to cut out a $1 \times 2$ rectangle from it along the grid lines;
- there are exactly 894 ways to cut out a $1 \times 3$ rectangle from it along the grid lines.

How many ways are there to cut out a $1 \times 5$ rectangle from it along the grid lines?

When counting the number of ways to cut out a rectangle, both vertical and horizontal orientations are considered.
