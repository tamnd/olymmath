---
tag: JWX0HC7P81
kind: problem
type: answer
answer: D_{n}=(1-1+\frac{1}{2!}-\cdots\\frac{1}{n!})n!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ ordered elements should have $n$! different permutations. If a permutation makes all elements not in their original positions, it is called a derangement, also known as a complete permutation.
