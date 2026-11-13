---
tag: 7KHJ4G4KT2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of sequences of $0, 1$ with length $n$ satisfying both of the following properties:

- There exists a simple polygon such that its $i$-th angle is less than $180$ degrees if and only if the $i$-th element of the sequence is $1$.

- There exists a convex polygon such that its $i$-th angle is less than $90$ degrees if and only if the $i$-th element of the sequence is $1$.
