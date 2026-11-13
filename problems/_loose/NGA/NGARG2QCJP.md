---
tag: NGARG2QCJP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Cono Sur Olympiad
    url: https://artofproblemsolving.com/community/c6h420195
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22197
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur/2000
    source: hf-ai-mo-aops
    label: 2000 Cono Sur Olympiad
---
Call a positive integer *descending* if, reading left to right, each of its digits (other than its leftmost) is less than or equal to the previous digit. For example, $4221$ and $751$ are descending while $476$ and $455$ are not descending. Determine whether there exists a positive integer $n$ for which $16^n$ is descending.
