---
tag: S1STPQSE7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250735
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=13
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two positive integers $m$ and $n$ are called *similar * if one of them can be obtained from the other one by swapping two digits (note that a $0$-digit cannot be swapped with the leading digit). Find the greatest integer $N$ such that N is divisible by $13$ and any number similar to $N$ is not divisible by $13$.
