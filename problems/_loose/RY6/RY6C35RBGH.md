---
tag: RY6C35RBGH
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $ a\in\mathbb{R}$, let $ M(a)$ be the maximum value of the function $ f(x)=\int_{0}^{\pi}\sin (x-t)\sin (2t-a)\ dt$.

Evaluate $ \int_{0}^{\frac{\pi}{2}}M(a)\sin (2a)\ da$.
