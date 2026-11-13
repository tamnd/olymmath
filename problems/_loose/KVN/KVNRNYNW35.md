---
tag: KVNRNYNW35
kind: problem
type: answer
answer: x = \pi - a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be parameter such that $0<a<2\pi$. For $0<x<2\pi$, find the extremum of $F(x)=\int_{x}^{x+a} \sqrt{1-\cos \theta}\ d\theta$.
