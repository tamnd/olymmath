---
tag: KKAT8JR9NH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237276
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=15
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the sum $$S=\sqrt{1+\frac{8\cdot 1^2-1}{1^2\cdot 3^2}}+\sqrt{1+\frac{8\cdot 2^2-1}{3^2\cdot 5^2}}+...+ \sqrt{1+\frac{8\cdot 1003^2-1}{2005^2\cdot 2007^2}}$$
