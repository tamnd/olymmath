---
tag: KBZR78PP7G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215742
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $n,d$, define $n \% d$ to be the unique value of the positive integer $r < d$ such that $n = qd + r$, for some positive integer $q$. What is the smallest value of $n$ not divisible by $5,7,11,13$ for which $n^2 \% 5 < n^2 \% 7 < n^2 \% 11 < n^2 \% 13$?
