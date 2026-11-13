---
tag: 9CNXT02XF6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $z$ be a 1995-digit natural number and let $n$ be a natural number with $1 \leq n \leq 1994$. Denote by $z[n]$ the number whose digit representation is obtained by removing the first $n$ digits from the digit representation of $z$ and appending them in the same order to the end of the digit representation.

Using these notations, prove for every 1995-digit $z$ and every $n$ with $1 \leq n \leq 1994$: If $z$ is divisible by 27, then $z[n]$ is also divisible by 27.
