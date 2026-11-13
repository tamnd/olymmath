---
tag: V9A3J8FDAX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203953
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n$, let $f(n)$ denote the number of ordered integer pairs $(x,y)$ satisfying the following equation:
$$ x^2 - xy + y^2 = n. $$
a) Determine $f(2022)$.
b) Determine the largest natural number $m$ such that $m$ divides $f(n)$ for every natural number $n$.
