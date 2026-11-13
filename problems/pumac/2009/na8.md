---
tag: VBBNDBASPM
kind: problem
appearances:
  - at: pumac/2009/na8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2009 official paper
    url: https://pumac.princeton.edu/s/PUMaC2009_NumberTheoryA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h427833
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3967
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest positive integer $k$ such that $\phi ( \sigma ( 2^k)) = 2^k$ . ( $\phi(n)$ denotes the number of positive integers that are smaller than $n$ and relatively prime to $n$ , and $\sigma(n)$ denotes the sum of divisors of $n$ ). As a hint, you are given that $641|2^{32}+1$ .
