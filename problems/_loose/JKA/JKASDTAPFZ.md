---
tag: JKASDTAPFZ
kind: problem
type: answer
answer: a + b - \gcd(a, b)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b$ be positive integers. Find, with proof, the maximum possible value of $a\lceil b\lambda \rceil - b \lfloor a \lambda \rfloor$ for irrational $\lambda$.
