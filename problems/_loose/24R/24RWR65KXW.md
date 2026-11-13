---
tag: 24RWR65KXW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90567
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=43
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A certain lecture has finitely many students and at least two students. Every student fell asleep exactly once and woke up exactly once. Suppose that for any two students, there was some time at which both were asleep. Prove that there was a time at which all the students were asleep.
