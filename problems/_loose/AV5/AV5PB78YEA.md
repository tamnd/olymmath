---
tag: AV5PB78YEA
kind: problem
type: answer
answer: 2 \text{ and } 7
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all prime number $p$ such that the number of positive integer pair $(x,y)$ satisfy the following is not $29$.

- $1\le x,y\le 29$

- $29\mid y^2-x^p-26$
