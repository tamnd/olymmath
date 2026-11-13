---
tag: YBM9CZ0K9A
kind: problem
type: answer
answer: "1514"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154450
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 21st PMO Area Stage
---
How many distinct numbers are there in the sequence $\left\lfloor\frac{1^{2}}{2018}\right\rfloor,\left\lfloor\frac{2^{2}}{2018}\right\rfloor, \ldots,\left\lfloor\frac{2018^{2}}{2018}\right\rfloor$ ?
