---
tag: FME6XHBJFT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $k$, denote the sum of digits of $k$ in its decimal representation by $S(k)$. Find all polynomials $P(x)$ with integer coefficients such that for any positive integer $n \ge 2017$, the integer $P(n)$ is positive and $S(P(n)) = P(S(n))$.
