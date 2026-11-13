---
tag: Z9Z9SNRNQK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a fixed natural number m be given. Call a positive integer n to be an MTRP-number iff

- $n \equiv 1\ (mod\ m)$

- Sum of digits in decimal representation of $n^2$ is greater than equal to sum of digits in decimal
representation of $n$

How many MTRP-numbers are there ?
