---
tag: A77GMPNJM2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A serie of positive integers $a_{1}$,$a_{2}$,. . . ,$a_{n}$ is $auto-delimited$ if for every index $i$ that holds $1\leq i\leq n$, there exist at least $a_{i}$ terms of the serie such that they are all less or equal to $i$.
Find the maximum value of the sum $a_{1}+a_{2}+\cdot \cdot \cdot+a_{n}$, where $a_{1}$,$a_{2}$,. . . ,$a_{n}$ is an $auto-delimited$ serie.
