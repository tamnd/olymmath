---
tag: TCJVTR5X19
kind: problem
type: answer
answer: '[\frac{n}{2}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every permutation $S$ of $(1,2, \cdots, n)$ where $n \geqslant 2$, let $f(S)$ be the minimum value of the absolute differences between every two adjacent elements in $S$. Find the maximum value of $f(S)$.
