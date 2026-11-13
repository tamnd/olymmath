---
tag: HFTPT0XC9N
kind: problem
type: answer
answer: (2,2),(3,3),(p,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all prime numbers $p$ and all integers $x$ such that $1 \leqslant x \leqslant 2 p$ and $x^{p-1}$ divides $(p-1)^{x}+1$
