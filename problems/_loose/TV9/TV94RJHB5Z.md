---
tag: TV94RJHB5Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208131
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=84
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an interior point $D$ of a triangle $ABC,$ let $\Gamma_D$ denote the circle passing through the points $A, \: E, \: D, \: F$ if these points are concyclic where $BD \cap AC=\{E\}$ and $CD \cap AB=\{F\}.$ Show that all circles $\Gamma_D$ pass through a second common point different from $A$ as $D$ varies.
