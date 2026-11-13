---
tag: 4EG8SFFDP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real polynomials $P(x)$ such that for every four distinct natural numbers $a, b, c, d$ such that $a^2 + b^2 + c^2 = 2d^2$ with $gcd(a, b, c, d) = 1$ the following equality holds:
$$2(P(d))^2 + 2P(ab + bc + ca) = (P(a + b + c))^2$$
.
