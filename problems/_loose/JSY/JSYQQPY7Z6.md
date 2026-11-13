---
tag: JSYQQPY7Z6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a function $f$ on the positive integers as follows: $f(n) = m$, where $m$ is the least positive integer such that $n$ is a factor of $m^2$. Find the smallest integer $M$ such that $\sqrt{M}$ is both a product of prime numbers, of which there are at least $3$, and a factor of $$\sum_{ d|M} f(d),$$ the sum of $f(d)$ for all positive integers $d$ that divide $M$.
