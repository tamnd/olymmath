---
tag: QRGF773BBD
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90410
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It's a week before Thanksgiving, and a family is trying to find their turkey. There are 5 boxes in a row, and the turkey is hiding in one of the 5 boxes.

Every day, the family is allowed to check one box to try to find the turkey, and every night, the turkey moves to a box right next to the box it was in. For example, from box 3 it could move to box 2 or 4 , and from box 5 it must move to box 4 . Determine a strategy for the family to catch the turkey before Thanksgiving.
