---
tag: A92JCW3E8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h375864
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55808
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
Find the greatest natural number $N$ such that, for any arrangement of the numbers $1, 2, \ldots, 400$ in a chessboard $20 \times 20$ , there exist two numbers in the same row or column, which differ by at least $N.$
