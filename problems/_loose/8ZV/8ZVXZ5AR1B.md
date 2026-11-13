---
tag: 8ZVXZ5AR1B
kind: problem
type: answer
answer: a_1 = a_2 = \cdots = a_n = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205146
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\geq 2$ be an integer. Determine all sets of real numbers $(a_1, a_2,\dots, a_n)$ such that $a_1-2a_2, a_2-2a_3,\dots, a_{n-1}-2a_n, a_n-2a_1$ are rearrangements of $a_1, a_2,\dots, a_n$.
