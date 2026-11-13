---
tag: SRSM1AQX78
kind: problem
type: answer
answer: n + m \equiv 1 \pmod 4 \text{ OR } n - m \equiv 0 \pmod 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264036
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be positive integers. Let $S$ be the set of all points $(x, y)$ with integer
coordinates such that $1 \leq x,y \leq m+n-1$ and $m+1 \leq x +y \leq 2m+n-1.$ Let $L$ be the
set of the $3m+3n-3$ lines parallel to one of $x = 0, y = 0,$ or $x + y = 0$ and passing through
at least one point in $S$. For which pairs $(m, n)$ does there exist a subset $T$ of $S$ such that
every line in $L$ intersects an odd number of elements of $T$?
