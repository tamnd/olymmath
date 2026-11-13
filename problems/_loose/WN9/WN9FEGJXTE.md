---
tag: WN9FEGJXTE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230481
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0000.parquet#row=94
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a $n \times n$ square table. Exactly one beetle sits in each cell of the table. At $12.00$ all beetles creeps to some neighbouring cell (two cells are neighbouring if they have the common side). Find the greatest number of cells which can become empty (i.e. without beetles) if
a) $n=8$
b) $n=9$

Problem Committee of BMO 2011
