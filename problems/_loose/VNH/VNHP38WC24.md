---
tag: VNHP38WC24
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be two strictly positive integers. Consider a grid of size $n \times n$. We want to cover it entirely with dominoes of size $k \times 1$ (which can be rotated if desired) without them overlapping. Show that this is possible if and only if $k$ divides $n$.
