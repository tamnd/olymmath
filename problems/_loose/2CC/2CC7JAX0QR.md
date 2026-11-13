---
tag: 2CC7JAX0QR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $n$ is a positive integer, let $\phi(n)$ be the number of positive integers less than or equal to $n$ that are relatively prime to $n$. Compute the value of the infinite sum
$$
\sum_{n=1}^\infty \frac{\phi(n) 2^n}{9^n - 2^n} .
$$
