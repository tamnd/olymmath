---
tag: 14MSC98YYC
kind: problem
type: answer
answer: f(a, b) = \gcd(a, b)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb N$ be the set of positive integers. Determine all functions $f:\mathbb N\times\mathbb N\to\mathbb N$ that satisfy both of the following conditions:

- $f(\gcd (a,b),c) = \gcd (a,f(c,b))$ for all $a,b,c \in \mathbb{N}$.

- $f(a,a) \geq a$ for all $a \in \mathbb{N}$.
