---
tag: DA9BJZ7YHC
kind: problem
type: answer
answer: \text{the nonnegative multiples of 2019}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263973
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a quadruple of positive integers $(a, b, c, d)$ fruitful if there are infinitely many integers $m$ such that $\text{gcd} (am + b, cm + d) = 2019$. Find all possible values of $|ad-bc|$ over fruitful quadruples $(a, b, c, d)$.
