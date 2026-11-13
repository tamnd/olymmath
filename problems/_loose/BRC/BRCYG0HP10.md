---
tag: BRCYG0HP10
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We place a coin at the point $(0,0)$, and at each step we allow replacing a coin at position $(i, j)$ with two coins at positions $(i+1, j)$ and $(i, j+1)$, provided there is no coin already there. Show that there will always be a coin with coordinates $(a, b)$ such that $a+b \leq 3$.
