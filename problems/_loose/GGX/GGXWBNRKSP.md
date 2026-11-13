---
tag: GGXWBNRKSP
kind: problem
type: answer
answer: '[\frac{(n+1)^{2}}{4}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98010
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n)$ denote the minimum number of distinct points in a planar point set $X$, such that for each $k=1$, $2, \cdots, n$, there exists a line in the plane that contains exactly $k$ points of $X$. Find $f(n)$.
