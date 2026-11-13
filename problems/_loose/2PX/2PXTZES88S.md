---
tag: 2PXTZES88S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Function $f:\mathbb{Z}_{>0}\rightarrow \mathbb{Z}_{>0}$ satisfies $f(34)=2024$ and for any positive integers $a$, $b$, and $c$, there exist non-degenerate triangles with side lengths $$a+f(b), b+f(c), c+f(a).$$
Determine the smallest possible value of $f(100)+f(101)+\cdots+f(199)$.
(A triangle is non-degenerate if its vertices are not collinear.)
