---
tag: VRC99W1CWV
kind: problem
type: answer
answer: 2^{}(\in{Z}_{+},\leqslant10)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $r(n)$ denote the sum of the remainders when $n$ is divided by $1, 2, \cdots, n$. Find all positive integers $m (1 < m \leqslant 2014)$ such that $r(m) = r(m-1)$.
