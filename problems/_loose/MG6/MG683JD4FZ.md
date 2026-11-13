---
tag: MG683JD4FZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer.
Find the number of sequences $a_1,a_2,...,a_k$ of different numbers from $\{ 1,2,3,...,n\}$ with the following property:
for every number $a$ of the sequence (except the first one) there exists a previous number $b$ such that their difference is $1$ (so $a-b= \pm 1$)
