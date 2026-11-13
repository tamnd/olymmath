---
tag: CW2HWPBVHM
kind: problem
type: answer
answer: k = 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223858
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $k\geqslant 3$ is called* fibby* if there exists a positive integer $n$ and positive integers $d_1 < d_2 < \ldots < d_k$ with the following properties: \\ $\bullet$ $d_{j+2}=d_{j+1}+d_j$ for every $j$ satisfying $1\leqslant j \leqslant k-2$, \\ $\bullet$ $d_1, d_2, \ldots, d_k$ are divisors of $n$, \\ $\bullet$ any other divisor of $n$ is either less than $d_1$ or greater than $d_k$.

Find all fibby numbers. \\ \\ *Proposed by Ivan Novak.*
