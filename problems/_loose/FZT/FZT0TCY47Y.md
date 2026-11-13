---
tag: FZT0TCY47Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250609
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a positive integer *good[/i ] if it doesn't have a zero digit and the sum of the squares of its digits is a perfect square. For example, $122$ and $34$ are good and $304$ and $12$ are not not good. Prove that there exists a $n$-digit good number for every positive integer $n$.
