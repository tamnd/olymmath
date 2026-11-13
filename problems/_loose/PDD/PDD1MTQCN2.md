---
tag: PDD1MTQCN2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine if there is a positive integer $n$ such that for any $n$ consecutive positive integers, there is **one** of them(denote $c$) such that $c$ can be written as sum of consecutive integers(not necessarily all positive) of at most $2020$ distinct ways.
