---
tag: GED53EXTWG
kind: problem
type: answer
answer: C = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $m \times n$ grid, each square is either filled or not filled. For each square, its *value* is defined as $0$ if it is filled and is defined as the number of neighbouring filled cells if it is not filled. Here, two squares are neighbouring if they share a common vertex or side. Let $f(m,n)$ be the largest total value of squares in the grid. Determine the minimal real constant $C$ such that $$\frac{f(m,n)}{mn} \le C$$holds for any positive integers $m,n$

*CSJL*
