---
tag: ZJ76PFEWTJ
kind: problem
type: answer
answer: \left\lceil x_3^n \right\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The equation $x^3-3x^2+1=0$ has three real solutions $x_1<x_2<x_3$. Show that for any positive integer $n$, the number $\left\lceil x_3^n\right\rceil$ is a multiple of $3$.
