---
tag: 2W9ZPDH0N7
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ be the smallest positive integer such that the binomial coefficient $\binom{10^9}{k}$ is less than the binomial coefficient $\binom{10^9 + 1}{k - 1}$. Let $a$ be the first (from the left) digit of $k$ and let $b$ be the second (from the left) digit of $k$. What is the value of $10a + b$?
