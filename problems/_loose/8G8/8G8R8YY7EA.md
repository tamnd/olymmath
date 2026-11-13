---
tag: 8G8R8YY7EA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples of positive integers $a, b, c$ that satisfy

a) $[a, b] + [a, c] + [b, c] = [a, b, c]$.

b) $[a, b] + [a, c] + [b, c] = [a, b, c] + (a, b, c)$.

Remark: Here $[x, y$] denotes the least common multiple of positive integers $x$ and $y$, and $(x, y)$ denotes their greatest common divisor.
