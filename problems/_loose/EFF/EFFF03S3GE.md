---
tag: EFFF03S3GE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91097
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland Swiss Mathematical Olympiad
---
Let $n$ be a positive integer. Kimiko starts with $n$ piles of pebbles each containing a single pebble. She can take an equal number of pebbles from two existing piles and combine the removed pebbles to create a new pile. Determine, in terms of $n$, the smallest number of nonempty piles Kimiko can end up with.
