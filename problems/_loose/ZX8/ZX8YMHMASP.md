---
tag: ZX8YMHMASP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h35306
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55838
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2005
    source: hf-ai-mo-aops
    label: 2005 All-Russian Olympiad
---
We select $16$ cells on an $8\times 8$ chessboard. What is the minimal number of pairs of selected cells in the same row or column?
