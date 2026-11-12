---
tag: 6FDNXQ1YMV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a sequence of words made up of the letters "A" and "B". The first word is "A", the second is "B". The $k$-th word is obtained by appending the $(k-1)$-th word to the right of the $(k-2)$-th word (so the beginning of the sequence looks like: "A", "B", "AB", "BAB", "ABABB", ...). Can a "periodic" word appear in the sequence, that is, a word consisting of several (at least two) identical segments, one after another, and only of them?
