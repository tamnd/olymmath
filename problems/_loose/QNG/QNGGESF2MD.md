---
tag: QNGGESF2MD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S = \{-17, -16, ..., 16, 17\}$. We call a subset $T$ of $S$ a good set if $-x \in T$ for all $x \in T$ and if $x, y, z \in T (x, y, z$ may be equal) then $x + y + z \ne 0$. Find the largest number of elements in a good set.
