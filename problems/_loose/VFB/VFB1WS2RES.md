---
tag: VFB1WS2RES
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that a professor has $n \ge 4$ students. Let $P$ denote the set of all ordered pairs $(n, k)$ such that the number of ways for the professor to choose one pair of students equals the number of ways for the professor to choose $k > 1$ pairs of students. For each such ordered pair $(n, k) \in P$, consider the sum $n+k=s$. Find the sum of all $s$ over all ordered pairs $(n, k)$ in $P$.

*If the same value of $s$ appears in multiple distinct elements $(n, k)$ in $P$, count this value multiple times.*
