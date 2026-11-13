---
tag: EBTTMK2B8F
kind: problem
type: answer
answer: C_{n}^{[\frac{n}{2}]}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For example, let $3 x_{1}, x_{2}, \cdots, x_{n}$ be vectors (or complex numbers) with a modulus not less than 1. For any vector (or complex number) $x$, among the $2^{n}$ sums $x_{A}=\sum_{i \in A} x_{i}$, what is the maximum number that can be selected such that the modulus of their difference with $x$ is less than $\frac{1}{2}$?
