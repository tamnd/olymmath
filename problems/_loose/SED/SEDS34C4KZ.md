---
tag: SEDS34C4KZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of real numbers $\{a_1, a_2, a_3, \ldots\}$ satisfies $0 \leq a_1 \leq 1$ and $a_{n+1} = \tfrac{1 + \sqrt{a_n}}{2}$ for all positive integers $n$. If $a_1 + a_{2021} = 1$, then the product $a_1a_2a_3\cdots a_{2020}$ can be written in the form $m^k$, where $k$ is an integer and $m$ is a positive integer that is not divisible by any perfect square greater than $1$. Compute $m + k$.
