---
tag: CEW0RQNZM6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204541
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=173
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let be $a$ be positive real number. Prove that there are no real numbers $b$ and $c$, with $b < c$, so that for any distinct numbers $x, y \in (b, c)$ we have $|\frac{x+y} {x-y}| \leq a$.
