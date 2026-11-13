---
tag: WT80KDZATB
kind: problem
type: answer
answer: (1,2,1,0),(2,0,2,0),(2,1,2,0,0),(,2,1,\underbrace{0,0,\ldots,0}_{-3},1,0,0,0),\geq3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all finite sequences $\left(x_{0}, x_{1}, \ldots, x_{n}\right)$ of real numbers so that the number $k$ occurs exactly $x_{k}$ times in the sequence.
