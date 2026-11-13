---
tag: BRW9QCS7RA
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214709
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. In $n$-dimensional space, consider the $2^n$ points whose coordinates are all $\pm 1$. Imagine placing an $n$-dimensional ball of radius 1 centered at each of these $2^n$ points. Let $B_n$ be the largest $n$-dimensional ball centered at the origin that does not intersect the interior of any of the original $2^n$ balls. What is the smallest value of $n$ such that $B_n$ contains a point with a coordinate greater than 2?
