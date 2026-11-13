---
tag: 798NBCDMCW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a triple $(a, b, c)$ of positive integers a **nice** triple if $a, b, c$ forms a non-decreasing arithmetic progression, $gcd(b, a) = gcd(b, c) = 1$ and the product $abc$ is a perfect square. Prove that given a nice triple, there exists some other nice triple having at least one element common with the given triple.
