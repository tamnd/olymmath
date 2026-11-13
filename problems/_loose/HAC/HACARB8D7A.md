---
tag: HACARB8D7A
kind: problem
type: answer
answer: "143"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90115
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A position of the hands of a (12-hour, analog) clock is called valid if it occurs in the course of a day. For example, the position with both hands on the 12 is valid; the position with both hands on the 6 is not. A position of the hands is called bivalid if it is valid and, in addition, the position formed by interchanging the hour and minute hands is valid. Find the number of bivalid positions.
