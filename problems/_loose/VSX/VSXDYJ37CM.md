---
tag: VSXDYJ37CM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $a_0,a_1,a_2,\dots$ is recursively defined by $$ a_0 = 1 \text{and} a_n = a_{n-1} \cdot \left(4-\frac{2}{n} \right) \text{for } n \geq 1. $$ Prove for each integer $n \geq 1$:

(a) The number $a_n$ is a positive integer.
(b) Each prime $p$ with $n < p \leq 2n$ is a divisor of $a_n$.
(c) If $n$ is a prime, then $a_n-2$ is divisible by $n$.
