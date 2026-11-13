---
tag: 5GWZEPF985
kind: problem
type: answer
answer: f(x)=2x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90158
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f$ from the set $\mathbf{R}$ of real numbers to itself such that $f(x y+1)=x f(y)+2$ for all $x, y \in \mathbf{R}$.
