---
tag: 5NVTX7V0YT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and let $a_1, \ldots, a_n, b_1, \ldots, b_n$ be real numbers. Alex the Kat writes down the $n^2$ numbers of the form $\min(a_i, a_j)$, and Kelvin the Frog writes down the $n^2$ numbers of the form $\max(b_i, b_j)$.

Let $x_n$ be the largest possible size of the set $\{a_1, \ldots, a_n, b_1, \ldots, b_n\}$, such that Alex the Kat and Kelvin the Frog write down the same collection of numbers. Determine the number of distinct integers in the sequence $x_1, x_2, \ldots, x_{10,000}$.
