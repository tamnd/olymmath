---
tag: BEQPZTHVMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266531
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $R$ be an $20 \times 18$ grid of points such that adjacent points are $1$ unit apart. A fly starts at a point and jumps in straight lines to other points in $R$ in turn, such that each point in R is visited exactly once and no two jumps intersect at a point other than an endpoint of a jump, for a total of $359$ jumps. Call a jump small if it is of length $1$. What is the least number of small jumps? (The left configuration for a $4 \times 4$ grid has $9$ small jumps and $15$ total jumps, while the right configuration is invalid.)
