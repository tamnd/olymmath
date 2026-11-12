---
tag: DB5HP2T8FP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an arbitrary set of $N$ numbers (where $N$ is a power of two: $N=2^{k}$) $a_{1}, a_{2}, \ldots, a_{N}$, each of which is either +1 or -1. From these numbers, a new set of numbers, each also equal to +1 or -1, is formed as follows: $ a_{1}^{\prime}=a_{1} a_{2}, a_{2}^{\prime}=a_{2} a_{3}, \ldots, a_{N-1}^{\prime}=a_{N-1} a_{N}, a_{N}^{\prime}=a_{N} a_{1} ;$ then from the numbers $a_{1}^{\prime}, a_{2}^{\prime}, \ldots, a_{N}^{\prime}$ the numbers $a_{1}^{\prime \prime}, a_{2}^{\prime \prime}, \ldots$ ..., $a^{\prime \prime}{ }_{N}, and$ so on. Prove that eventually we will obtain a set consisting solely of the number +1.
