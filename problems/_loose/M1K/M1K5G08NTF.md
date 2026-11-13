---
tag: M1K5G08NTF
kind: problem
type: answer
answer: "96"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154286
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=35
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 18th PMO Area Stage
---
Let $P$ be the product of all prime numbers less than 90 . Find the largest integer $N$ so that for each $n \in\{2,3,4, \ldots, N\}$, the number $P+n$ has a prime factor less than 90 .
