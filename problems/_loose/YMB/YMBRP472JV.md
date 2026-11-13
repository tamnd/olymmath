---
tag: YMBRP472JV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247331
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a triangle and $D, E, F$ the midpoints of the sides $BC, CA, AB$ respectively. Show that $\angle DAC = \angle ABE$ if and only if $\angle AFC = \angle BDA$
