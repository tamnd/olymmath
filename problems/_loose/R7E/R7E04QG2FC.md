---
tag: R7E04QG2FC
kind: problem
type: answer
answer: "1991"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for the smallest natural number $n>1000$ with the following properties:

1. The digit sequence of $n$ is symmetric.
2. The prime factorization of $n$ contains exactly two prime factors $p_{1}$ and $p_{2}$ in 1st power.
3. When divided by $p_{1}$, $p_{2}$ leaves a remainder of 5.
