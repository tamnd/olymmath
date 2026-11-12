---
tag: J66NNXS3B0
kind: problem
type: answer
answer: f(x)=\frac{x}{1+\frac{x}{239}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exists a function $f(x)$ defined on $[0 ;+\infty]$ such that $f(f(\ldots(x) \ldots))=\frac{x}{x+1}$ (the function $f$ is applied 239 times).
