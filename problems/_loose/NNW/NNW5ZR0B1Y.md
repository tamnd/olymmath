---
tag: NNW5ZR0B1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(a, b, c)$ of positive integers for which $a + [a, b] = b + [b, c] = c + [c, a]$.

Here $[a, b]$ denotes the least common multiple of integers $a, b$.

*(Proposed by Mykhailo Shtandenko)*
