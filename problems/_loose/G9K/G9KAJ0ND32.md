---
tag: G9KAJ0ND32
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241622
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of integer such that:
$ a_1 = 2$
$ a_2 = 5$
$ a_{n + 1} = (2 - n^2)a_n + (2 + n^2)a_{n - 1}, \forall n\ge 2$

Find all triplies $ (x,y,z) \in \mathbb{N}^3$ such that $ a_xa_y = a_z$.
