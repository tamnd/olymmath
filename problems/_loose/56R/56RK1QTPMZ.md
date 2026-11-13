---
tag: 56RK1QTPMZ
kind: problem
type: answer
answer: \emptyset, \{0\}, \{0, 1\}, \{0, 1, 2\}, \{0, 1, 2, 3\}, \{0, 1, 2, 3, 4\}, \mathbb{Z}_{\ge 0}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all sets $ A$ of nonnegative integers with the property: if for the nonnegative intergers $m$ and $ n $ we have $m+n\in A$ then $m\cdot n\in A.$
