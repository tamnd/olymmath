---
tag: J8FGQD64A5
kind: problem
appearances:
  - at: pumac/2021/ca7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825141
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73281
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Cassidy has string of $n$ bits, where $n$ is a positive integer, which initially are all $0$ s or $1$ s. Every second, Cassidy may choose to do one of two things:

1. Change the first bit (so the first bit changes from a $0$ to a $1$ , or vice versa)
2. Change the first bit after the first $1$ .

Let $M$ be the minimum number of such moves it takes to get from $1\dots 1$ to $0 \dots 0$ (both of length $12$ ), and $N$ the number of starting sequences with $12$ bits that Cassidy can turn into all $0$ s. Find $M + N$ .
