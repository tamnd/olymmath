---
tag: QMWR9SPVPC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90478
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \ldots, x_{1000}, y_{1}, y_{2}, \ldots, y_{1000}$ be 2000 different real numbers, and form the $1000 \times 1000$ matrix whose $(i, j)$-entry is $x_{i}+y_{j}$. If the product of the numbers in each row is 1 , show that the product of the numbers in each column is -1 .
