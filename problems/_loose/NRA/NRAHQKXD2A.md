---
tag: NRAHQKXD2A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90278
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Decide whether that there exists an infinite set $S$ of positive integers with the property that if we take any finite subset $T$ of $S$, the sum of the elements of $T$ is not a perfect $k$ th power for any $k \geq 2$.
