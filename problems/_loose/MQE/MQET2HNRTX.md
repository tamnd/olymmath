---
tag: MQET2HNRTX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Aidan and Andrew independently select distinct cells in a $4 $ by $4$ grid, as well as a direction (either up, down, left, or right), both at random. Every second, each of them will travel $1$ cell in their chosen direction. Find the probability that Aidan and Andrew willmeet (be in the same cell at the same time) before either one of them hits an edge of the grid. (If Aidan and Andrew cross paths by switching cells, it doesn't count as meeting.)
