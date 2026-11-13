---
tag: RGDTK00NCQ
kind: problem
type: answer
answer: x_{1}=2n\pi+\frac{\pi}{2},x_{2}=2n\pi+\frac{3\pi}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation $(\sin x)^{\arctan (\sin x+\cos x)}=(\csc x)^{\arctan (\sin 2 x)+\frac{\pi}{4}}$, where $2 n \pi<x<$ $(2 n+1) \pi, n$ is any integer.
