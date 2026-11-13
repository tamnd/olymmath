---
tag: 44ZMF15DVM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211736
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=136
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
**a)** Find all prime numbers $p, q, r$ satisfying $3 \nmid p+q+r$ and $p+q+r$ and $pq+qr+rp+3$ are both perfect squares.

**b)** Do there exist prime numbers $p, q, r$ such that $3 \mid p+q+r$ and $p+q+r$ and $pq+qr+rp+3$ are both perfect squares?
