---
tag: 1XG131EYRD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268359
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $n$, the symbol $a_n/b_n$ is the simplest form of the fraction $1+1/2+...+1/n$.
Prove that for every pair of positive integers $(M, N)$ we can always find a positive integer $m$ where $(a_n, N) = 1$ for all $n = m, m + 1, ...,m + M$.
