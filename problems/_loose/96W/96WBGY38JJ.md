---
tag: 96WBGY38JJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=5514
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2019
    source: hf-numina-olympiads
    label: HMMT February
  - at: hmmt/2019
    source: hf-mathnet
    label: United States HMMT February 2019
---
How many pairs of integers $(x, y)$ are there such that $\left|x^{2}-2 y^{2}\right| \leq 1$ and $|3 x-4 y| \leq 1$ ?
