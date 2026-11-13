---
tag: WAESP4N5MY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251051
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAUDI ARABIAN MATHEMATICAL COMPETITIONS
---
Ten vertices of a regular $20$-gon $A_1A_2....A_{20}$ are painted black and the other ten vertices are painted blue. Consider the set consisting of diagonal $A_1A_4$ and all other diagonals of the same length.
1. Prove that in this set, the number of diagonals with two black endpoints is equal to the number of diagonals with two blue endpoints.
2. Find all possible numbers of the diagonals with two black endpoints.
