---
tag: G8MY1YX0ES
kind: problem
type: answer
answer: (19,89)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for all pairs $\left(p_{1} ; p_{2}\right)$ of (in the decimal system) two-digit prime numbers $p_{1}$ and $p_{2}$ with $p_{1}<p_{2}$, that satisfy the following conditions:

1. Neither the units nor the tens digits of $p_{1}$ and $p_{2}$ are prime numbers.
2. The tens digits of $p_{1}$ and $p_{2}$ are not divisible by 3.
3. The sum $p_{1}+p_{2}$ is neither divisible by 10 nor by 13.
