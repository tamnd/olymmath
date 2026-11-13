---
tag: WVFXS2199Z
kind: problem
type: answer
answer: "637"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be natural numbers greater than 2. We will say that $n$ is attracted by $k$ if the following conditions are met:

1) $n$ is divisible by $k$ and has $k-1$ divisors;
2) the sum of the divisors of $n$ is divisible by $k$, but not by $k+1$.

Determine the smallest three-digit number $n$ attracted by 7.
