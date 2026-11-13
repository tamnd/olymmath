---
tag: Q3RK7CFD9K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=152340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A binary word is a finite sequence of 0's and 1's. A square subword is a subsequence consisting of two identical chunks next to each other. For example, the word 100101011 contains the square subwords 00, 0101 (twice), 1010, and 11.
Find a long binary word containing a small number of square subwords. Specifically, write down a binary word of any length $n \leq 50$. Your score will be $\max \{0, n-s\}$, where $s$ is the number of occurrences of square subwords. (That is, each different square subword will be counted according to the number of times it appears.)
