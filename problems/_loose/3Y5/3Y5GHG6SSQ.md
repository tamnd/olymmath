---
tag: 3Y5GHG6SSQ
kind: problem
type: answer
answer: c = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integer $n$ we define $f(n)$ as sum of all of its positive integer divisors (including $1$ and $n$). Find all positive integers $c$ such that there exists strictly increasing infinite sequence of positive integers $n_1, n_2,n_3,...$ such that for all $i \in \mathbb{N}$ holds $f(n_i)-n_i=c$
