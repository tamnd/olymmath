---
tag: V6KMJBAGQ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's define the sequence $x_{1}, x_{2}, x_{3}, \ldots, x_{100}$ as follows: let $x_{1}$ be an arbitrary positive number less than 1, and $x_{n+1}=x_{n}-x_{n}^{2}$ for all $n=1,2,3, \ldots, 99$. Prove that $x_{1}^{3}+x_{2}^{3}+\ldots+x_{99}^{3}<1$.
