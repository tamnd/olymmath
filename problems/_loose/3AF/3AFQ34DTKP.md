---
tag: 3AFQ34DTKP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83620
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A partition of $n$ is a way of writing $n$ as a sum of integers. For example, $5=4+1=3+2=3+1+1=2+2+1=2+1+1+1=1+1+1+1+1$ has 7 partitions.

Show that the number of partitions of $n$ into $k$ parts is equal to the number of partitions of $n$ where the largest element is $k$.
