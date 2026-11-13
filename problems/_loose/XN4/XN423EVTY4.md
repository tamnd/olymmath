---
tag: XN423EVTY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77951
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $\mathrm{f}: \mathbb{R} \rightarrow \mathbb{R}$ such that for all real numbers $x, y$,

$$
(f(x)+y)(f(x-y)+1)=f(f(x f(x+1))-y f(y-1))
$$
