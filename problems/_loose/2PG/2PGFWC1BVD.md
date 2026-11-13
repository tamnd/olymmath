---
tag: 2PGFWC1BVD
kind: problem
type: answer
answer: (x,x+1)withx\geq1(x,x-1)withx\geq2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(x, y)$ of positive integers that satisfy

$$
x+y+1 \mid 2 x y \text { and } x+y-1 \mid x^{2}+y^{2}-1
$$
