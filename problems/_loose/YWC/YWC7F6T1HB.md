---
tag: YWC7F6T1HB
kind: problem
type: answer
answer: F_{n}\equivb(76^{n}-64^{n})modulo139
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We want to calculate the Fibonacci sequence modulo 139.

- Verify that 12 is a solution to the equation $y^{2}=5$ modulo 139.
- Deduce that the solutions to $x^{2}-x-1=0$ modulo 139 are 64 and 76.
- Find an integer $b$ such that $12 b=1$ modulo 139.
- Deduce that if $F_{0}=0$ and $F_{1}=1, F_{n} \equiv b\left(76^{n}-64^{n}\right)$ modulo 139.
