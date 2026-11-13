---
tag: R8VM2DRSW8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213349
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real values of $a$ for which the equation $x(x+1)^3=(2x+a)(x+a+1)$ has four distinct real roots.
