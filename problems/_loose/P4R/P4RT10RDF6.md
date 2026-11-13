---
tag: P4RT10RDF6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a_{1}$ is a positive integer, $a_{n+1}$ is the largest odd divisor of $2^{n}-1+a_{n}$, $r$ is a given positive integer greater than 1, ask: Is it possible that there are infinitely many ordered pairs of positive integers $(m, n)$ such that $m>n$ and $a_{m}=r a_{n}$?
