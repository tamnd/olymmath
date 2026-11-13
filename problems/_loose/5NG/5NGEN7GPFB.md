---
tag: 5NGEN7GPFB
kind: problem
type: answer
answer: 1, 2, 3, 4, 5, 7, 9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208359
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive integers $n$ such that the number $n(n+2)(n+4)$ has at most $15$ positive divisors.
