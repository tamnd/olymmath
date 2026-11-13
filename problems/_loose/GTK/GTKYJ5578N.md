---
tag: GTKYJ5578N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241626
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ \sigma(\cdot): \mathbb{N}_0 \to \mathbb{N}_0$ be the function from every positive integer $ n$ to the sum of divisors $ \sum_{d \mid n}{d}$ (i.e. $ \sigma(6) = 6 + 3 + 2 + 1$ and $ \sigma(8) = 8 + 4 + 2 + 1$).
Find all primes $ p$ such that $ p \mid \sigma(p - 1)$.
*(Salvatore Tringali)*
