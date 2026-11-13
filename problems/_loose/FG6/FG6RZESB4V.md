---
tag: FG6RZESB4V
kind: problem
type: answer
answer: "45"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of two-digit numbers that do not contain the digit 0. Two numbers in $S$ are called friends if their largest digits are equal, and if the difference between their smallest digits is 1. For example, 68 and 85 are friends, 78 and 88 are friends, but 58 and 75 are not friends.

Determine the largest integer $m$ such that there exists a subset $T$ of $S$ with $m$ elements, such that any two elements of $T$ are not friends.
