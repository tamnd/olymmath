---
tag: QDC8B568MC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2031586
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18680
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2020
    source: hf-ai-mo-aops
    label: 2020 Caucasus Mathematical Olympiad
---
Peter wrote $100$ distinct integers on a board. Basil needs to fill the cells of a table $100\times{100}$ with integers so that the sum in each rectangle $1\times{3}$ (either vertical, or horizontal) is equal to one of the numbers written on the board. Find the greatest $n$ such that, regardless of numbers written by Peter, Basil can fill the table so that it would contain each of numbers $(1,2,...,n)$ at least once (and possibly some other integers).
