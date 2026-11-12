---
tag: J8FGQD64A5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825141
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2021
    source: hf-ai-mo-aops
    label: 2021 Princeton University Math Competition
---
Cassidy has string of $n$ bits, where $n$ is a positive integer, which initially are all $0$ s or $1$ s. Every second, Cassidy may choose to do one of two things:

1. Change the first bit (so the first bit changes from a $0$ to a $1$ , or vice versa)
2. Change the first bit after the first $1$ .

Let $M$ be the minimum number of such moves it takes to get from $1\dots 1$ to $0 \dots 0$ (both of length $12$ ), and $N$ the number of starting sequences with $12$ bits that Cassidy can turn into all $0$ s. Find $M + N$ .
