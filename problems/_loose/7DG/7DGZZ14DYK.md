---
tag: 7DGZZ14DYK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247432
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two right isosceles triangles of legs equal to $1$ are glued together to form either an isosceles triangle - called *t-shape* - of leg $\sqrt2$, or a parallelogram - called *p-shape* - of sides $1$ and $\sqrt2$. Find all integers $m$ and $n, m, n \ge 2$, such that a rectangle $m \times n$ can be tilled with t-shapes and p-shapes.
