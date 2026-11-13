---
tag: N97QJKGFMP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233538
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci numbers are a sequence of numbers defined recursively as follows: $F_1=1$, $F_2=1$, and $F_n=F_{n-1}+F_{n-2}$. Using this definition, compute the sum
$$\sum_{k=1}^{10}\frac{F_k}{F_{k+1}F_{k+2}}.$$
