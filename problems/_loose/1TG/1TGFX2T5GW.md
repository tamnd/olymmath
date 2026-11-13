---
tag: 1TGFX2T5GW
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90198
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the maximum number of squares on an $8 \times 8$ chessboard on which pieces may be placed so that no two of these squares touch horizontally, vertically, or diagonally?
