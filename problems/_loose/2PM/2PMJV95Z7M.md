---
tag: 2PMJV95Z7M
kind: problem
type: answer
answer: 1,2^{\frac{n+3}{3}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given positive integer $n$, try to find all positive integers $k$ such that $2^{n}$ can be expressed as the sum of cubes of $k$ consecutive integers (including 1 integer).
