---
tag: NN4N0PRFM4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be an integer greater than 1. We call $x$ the smallest positive integer with the following property: there exists a positive integer $y$ strictly less than $x-1$ such that $x$ divides $N+y$. Prove that $x$ is either twice a prime number or a power of a prime number.

Note: it is recalled that $x$ is a power of a prime number if there exist a prime $p$ and a positive integer $n \geq 1$ such that $x=p^{n}$.
