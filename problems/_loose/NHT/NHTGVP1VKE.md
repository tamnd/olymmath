---
tag: NHTGVP1VKE
kind: problem
type: answer
answer: \{2, 3, 4, 5, 7, 9\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every positive integer $x$, let $k(x)$ denote the number of composite numbers that do not exceed $x$.
Find all positive integers $n$ for which $(k (n))! $ lcm $(1, 2,..., n)> (n - 1) !$ .
