---
tag: 86VGXRHNS5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245799
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $h: \mathbb{Z}\to \mathbb{Z}$ such that for all $x,y\in \mathbb{Z}$: $$h(x+y)+h(xy)=h(x)h(y)+1.$$
