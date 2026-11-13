---
tag: 3JD7ZX4XTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90644
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=307
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for each $n \geq 1$, there is a number $N$ having $n$ digits, each of which is either 1 or 2 , such that $N$ is divisible by $2^{n}$.
