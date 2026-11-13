---
tag: PPJGJVJRAQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90857
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=364
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have four bowls labeled $A, B, C, D$ in a row, and we have four indistinguishable marbles which we can initially distribute among the bowls any way we like. A move consists of transferring one marble from a bowl to one of the adjacent bowls in the row. Is it possible to perform a succession of moves in which every distribution of the marbles appears exactly once?
