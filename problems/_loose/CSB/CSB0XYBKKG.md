---
tag: CSB0XYBKKG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given any $n$ positive integers, and a sequence of $2^n$ integers (with terms among them), prove there exists a subsequence made of consecutive terms, such that the product of its terms is a perfect square. Also show that we cannot replace $2^n$ with any lower value (therefore $2^n$ is the threshold value for this property).
