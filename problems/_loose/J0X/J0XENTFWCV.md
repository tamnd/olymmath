---
tag: J0XENTFWCV
kind: problem
type: answer
answer: "256"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90441
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define an $n$-staircase to be the union of all squares of an $n \times n$ grid lying on or below its main diagonal. How many ways are there to divide a 10 -staircase into 10 rectangles, each having a side of length 1 ? (Reflections are not included.)
