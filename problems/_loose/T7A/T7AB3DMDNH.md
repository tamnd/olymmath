---
tag: T7AB3DMDNH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vasya writes down a sequence of numbers: $a_{1}=1, a_{2}=1, \ldots, a_{n+1}=1+\frac{a_{n-1}}{a_{n}}$ for $n \geq 2$. He noticed that $a_{5}>2$, $a_{6}<2$, $a_{7}>2$, $a_{8}<2$ and made the following hypothesis: all terms of the sequence with odd indices, starting from index 5, are greater than 2, and all terms with even indices, starting from index 4, are less than 2. Prove this hypothesis.
