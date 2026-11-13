---
tag: 24FX3SPCXA
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90527
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With two properly chosen weights and a balance scale, it is possible to determine the weight of an unknown object known to weigh an integer number of pounds from 1 to $n$. Find the largest possible value of $n$.

Remark. The balance scale tells whether the weights placed on each side are equal and, if not, which side is heavier. It may be used an unlimited number of times.
