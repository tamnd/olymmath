---
tag: SMYRJ7F2EW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238744
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $P(x)$ is a non-constant polynomial with real coefficients, and even degree. Bob writes the polynomial $P(x)$ on a board. At every step, if the polynomial on the board is $f(x)$, he can replace it with

1. $f(x)+c$ for a real number $c$, or
2. the polynomial $P(f(x))$.

Can he always find a finite sequence of steps so the final polynomial on the board has exactly $2020$ real roots? What about $2021$?

*~Sutanay Bhattacharya*
