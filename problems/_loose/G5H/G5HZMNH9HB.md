---
tag: G5HZMNH9HB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90733
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2000 distinct positive integers are written down, and it so happens that the product of any 3 different numbers from this list is a square. Prove that each one of them is a square.
