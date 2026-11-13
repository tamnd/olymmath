---
tag: 7P1EF6YFT7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2525411
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48621
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244534
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Mongolian Mathematical Olympiad
---
Some cells of a $2n\times2n$ board are marked so that each cell has an even number of neighboring (i.e. sharing a side) marked cells. Find the number of such markings.
