---
tag: SD8W7NT80M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207106
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Find the number of sequences $x_{1},x_{2},\ldots x_{2n-1},x_{2n}$, where $x_{i}\in\{-1,1\}$ for each $i$, satisfying the following condition: for any integer $k$ and $m$ such that $1\le k\le m\le n$ then the following inequality holds $$\left|\sum_{i=2k-1}^{2m}x_{i}\right|\le\ 2$$
