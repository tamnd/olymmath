---
tag: VENTYCMRN1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The ***duchess*** is a chess piece such that the duchess attacks all the cells in two of the four diagonals which she is contained(the directions of the attack can vary to two different duchesses). Determine the greatest integer $n$, such that we can put $n$ duchesses in a table $8\times 8$ and none duchess attacks other duchess.
Note: The attack diagonals can be "outside" the table; for instance, a duchess on the top-leftmost cell we can choose attack or not the main diagonal of the table $8\times 8$.
