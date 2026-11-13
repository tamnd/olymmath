---
tag: AGZKQN38ZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. We want to test if $n$ is prime. We can test if $n$ is divisible by $2, 3, 4, \ldots, n-1$. We then know that $n$ is prime if and only if it is not divisible by any of these numbers. Show that in fact, it is sufficient to test divisors less than $\sqrt{n}$, which provides a faster way to test if a number $n$ is prime.
