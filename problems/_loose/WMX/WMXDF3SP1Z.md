---
tag: WMXDF3SP1Z
kind: problem
type: answer
answer: k = 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a group of $k$ boys is $n-acceptable$ if removing any boy from the group one can always find, in the other $k-1$ group, a group of $n$ boys such that everyone knows each other. For each $n$, find the biggest $k$ such that in any group of $k$ boys that is $n-acceptable$ we must always have a group of $n+1$ boys such that everyone knows each other.
