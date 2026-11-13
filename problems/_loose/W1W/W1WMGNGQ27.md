---
tag: W1WMGNGQ27
kind: problem
type: answer
answer: (2,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all such pairs pf positive integers $(a, b)$ such that $a + b + (gcd (a, b))^ 2 = lcm (a, b) = 2 \cdot lcm(a -1, b)$, where $lcm (a, b)$ denotes the smallest common multiple, and $gcd (a, b)$ denotes the greatest common divisor of numbers $a, b$.
