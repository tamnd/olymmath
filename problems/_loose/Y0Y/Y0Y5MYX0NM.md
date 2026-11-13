---
tag: Y0Y5MYX0NM
kind: problem
type: answer
answer: f(x)=k(k\inK),f(x)=10^{}x(\in{N}),f(x)=10^{}x+k(\in{N},k\inK,k<10^{})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $K$ be the set of all positive integers whose decimal representation does not contain the digit 7. Find all polynomials $f(x)$ such that the coefficients of $f(x)$ are non-negative integers, and for any $x \in K$, we have $f(x) \in K$.
