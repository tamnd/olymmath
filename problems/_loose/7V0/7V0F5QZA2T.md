---
tag: 7V0F5QZA2T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250594
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $T$ be a real number satisfying the property:
For any nonnegative real numbers $a, b, c,d, e$ with their sum equal to $1$, it is possible to arrange them around a circle such that the products of any two neighboring numbers are no greater than $T$.
Determine the minimum value of $T$.
