---
tag: 8NKX512MCW
kind: problem
type: answer
answer: (0,-2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=194277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We define $(a, b) \diamond(c, d)=(a c-b d, a d+b c)$.

Determine all pairs $(x, y)$ for which $(x, 3) \diamond(x, y)=(6,0)$.
