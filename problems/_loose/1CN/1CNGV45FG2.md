---
tag: 1CNGV45FG2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $a_1, a_2,...$ as follows: $a_1 = 1$, and for every $n \ge 2$, $a_n = n - 2$ if $a_{n-1} = 0$ and $a_n = a_{n-1} - 1$, otherwise. Find the number of $1 \le k \le 2016$ such that there are non-negative integers $r, s$ and a positive integer $n$ satisfying $k = r + s$ and $a_{n+r} = a_n + s$.
