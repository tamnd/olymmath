---
tag: E7G1EVT0N4
kind: problem
type: answer
answer: "500"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Simon has 2017 blue blocks numbered from 1 to 2017. He also has 2017 yellow blocks numbered from 1 to 2017. Simon wants to arrange his 4034 blocks in a row. He wants to do so in such a way that for every $k=1,2, \ldots, 2017$ the following conditions are met:

- to the left of the blue block with number $k$ there are $k$ or more yellow blocks;
- to the right of the yellow block with number $k$ there are $k$ or fewer blue blocks.

Determine all possible numbers of the 1000th block from the left in the row.
