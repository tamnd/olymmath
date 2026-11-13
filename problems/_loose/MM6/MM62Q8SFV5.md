---
tag: MM62Q8SFV5
kind: problem
type: answer
answer: (m, n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217946
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a coloring of an $m\times n$ table ($m,n\ge 5$) in three colors a *good coloring* if the following conditions are satisfied: 1) Each cell has the same number of neighboring cells of two other colors; 2) Each corner has no neighboring cells of its color.
Find all pairs $(m,n)$ ($m,n\ge 5$) for which there exists a good coloring of $m\times n$ table.

*(I. Manzhulina, B. Rubliov)*
