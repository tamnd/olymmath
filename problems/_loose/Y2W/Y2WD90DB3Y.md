---
tag: Y2WD90DB3Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242592
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a meeting of $4042$ people, there are $2021$ couples, each consisting of two people. Suppose that $A$ and $B$, in the meeting, are friends when they know each other. For a positive integer $n$, each people chooses an integer from $-n$ to $n$ so that the following conditions hold. (Two or more people may choose the same number).

- Two or less people chose $0$, and if exactly two people chose $0$, they are coupled.

- Two people are either coupled or don't know each other if they chose the same number.

- Two people are either coupled or know each other if they chose two numbers that sum to $0$.

Determine the least possible value of $n$ for which such number selecting is always possible.
