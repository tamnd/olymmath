---
tag: RK0F27VM3H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a$ and $ k$ be positive integers. Let $ a_i$ be the sequence defined by
$ a_1 = a$ and
$ a_{n + 1} = a_n + k\pi(a_n)$
where
$ \pi(x)$ is the product of the digits of $ x$ (written in base ten)
Prove that we can choose $ a$ and $ k$ such that the infinite sequence $ a_i$ contains exactly $ 100$ distinct terms
