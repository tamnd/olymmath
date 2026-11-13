---
tag: SQHNRMPZHA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $ a$. Let $ p$ is prime number such that $ p|a$ and $ p \equiv \pm 3 (mod8)$. Define a sequence $ \{a_n\}_{n = 0}^\infty$ such that $ a_n = 2^n + a$. Prove that the sequence $ \{a_n\}_{n = 0}^\infty$ has finitely number of square of integer.
