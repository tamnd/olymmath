---
tag: D2FSH8JE2B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185257
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let 64 pairwise different numbers be chosen arbitrarily and then distributed over the fields of a chessboard such that each field contains exactly one of these numbers. For each such distribution of numbers, the following definitions are given:

1. First, in each (horizontal) row of the chessboard, the largest number is sought. Among the eight numbers thus found, the smallest is denoted by $a$.

2. First, in each (vertical) column of the chessboard, the smallest number is sought. Among the eight numbers thus found, the largest is denoted by $b$.

Axel claims about the so-defined numbers $a$ and $b$:

"If $a \neq b$, then it must always be the case that $a > b$."

Investigate whether this is true or not!
