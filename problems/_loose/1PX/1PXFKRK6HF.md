---
tag: 1PXFKRK6HF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90266
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=476
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer such that $N$ is divisible by 81 and the number formed by reversing the digits of $N$ is also divisible by 81 . Prove that the sum of the digits of $N$ is divisible by 81 .
