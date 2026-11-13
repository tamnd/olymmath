---
tag: 98HEX4HKW7
kind: problem
type: answer
answer: n = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247130
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-mathnet
    label: Romania SELECTION TESTS FOR THE 2019 BMO AND IMO
---
A positive integer $m$ is perfect if the sum of all its positive divisors, $1$ and $m$ inclusive, is equal to $2m$. Determine the positive integers $n$ such that $n^n + 1$ is a perfect number.
