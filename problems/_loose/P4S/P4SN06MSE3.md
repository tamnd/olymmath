---
tag: P4SN06MSE3
kind: problem
type: answer
answer: (1,301),(4,201),(7,101),(10,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90147
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=63
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(m, n)$ of natural numbers such that $200 m+6 n=2006$.
