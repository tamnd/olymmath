---
tag: 1AK2PAJ6QT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider $n$ boxes aligned $B_{1}, \cdots, B_{n}$, and $n$ balls distributed in the boxes. The following operations are allowed: take a ball from box $B_{1}$ and add one to $B_{2}$, or take a ball from $B_{n}$ to add it to $B_{n-1}$, or take two balls from a box $B_{i}$ for $1<i<n$ and add one to the boxes $B_{i-1}$ and $B_{i+1}$. Is it always possible to reach a configuration where each box contains only one ball?
