---
tag: CD2RVE10C0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f_n$ be $n$th Fibonacci number defined by recurrence $f_{n+1} - f_n - f_{n-1} = 0$, $n \in \mathbb{N}$ and initial conditions $f_0 = 0$, $f_1 = 1$. Prove that for any $n \in \mathbb{N}$ $$(n - 1) (n + 1) (2nf_{n+1} - (n + 6) f_n)$$is divisible by 150 for any $n \in \mathbb{N}$.
