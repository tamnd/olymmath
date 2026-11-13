---
tag: TDGAG0K2FB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250666
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=23
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The partition of $2n$ positive integers into $n$ pairs is called *square-free* if the product of numbers in each pair is not a perfect square.Prove that if for $2n$ distinct positive integers, there exists one square-free partition, then there exists at least $n!$ square-free partitions.
