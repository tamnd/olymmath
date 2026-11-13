---
tag: 359CNXT7TY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, we consider all its divisors (including $1$ and itself). Suppose that $p\%$ of these divisors have their unit digit equal to $3$. (For example $n = 117$, has six divisors, namely $1,3,9,13,39,117$. Two of these divisors namely $3$ and $13$, have unit digits equal to $3$. Hence for $n = 117$, $p =33.33...$). Find, when $n$ is any positive integer, the maximum possible value of $p$.
