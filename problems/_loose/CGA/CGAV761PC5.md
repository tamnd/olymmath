---
tag: CGAV761PC5
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathcal{F}$ be the set of all functions $f : (0,\infty)\to (0,\infty)$ such that $f(3x) \geq f( f(2x) )+x$ for all $x$. Find the largest $A$ such that $f(x) \geq A x$ for all $f\in\mathcal{F}$ and all $x$.
