---
tag: CE9V5NDBDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2831684
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54966
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248331
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2022
    source: hf-ai-mo-aops
    label: 2022 239 Open Mathematical Olympiad
---
A piece is placed in the lower left-corner cell of the $15 \times 15$ board. It can move to the cells that are adjacent to the sides or the corners of its current cell. It must also alternate between horizontal and diagonal moves $($ the first move must be diagonal $).$ What is the maximum number of moves it can make without stepping on the same cell twice $?$
