---
tag: ZC6NVF6N9V
kind: problem
type: answer
answer: (3, 1, 2), (-3, -1, -2), (1, -1, 2), (-1, 1, -2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all relatively distinct integers $m, n, p\in \mathbb{Z}_{\ne 0}$ such that the polynomial
$$F(x) = x(x - m)(x - n)(x - p) + 1$$is reducible in $\mathbb{Z}[x].$
