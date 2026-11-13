---
tag: KWMD95SZRD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the function $f(n)$ for positive integers $n$ as follows: if $n$ is prime, then $f(n) = 1$; and $f(ab) =
a \cdot f(b)+f(a)\cdot b$ for all positive integers $a$ and $b$. How many positive integers $n$ less than $5^{50}$ have the property that $f(n) = n$?
