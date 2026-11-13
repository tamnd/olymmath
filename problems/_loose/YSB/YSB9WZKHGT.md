---
tag: YSB9WZKHGT
kind: problem
type: answer
answer: n = 3, 4, 6, 8, 12, 18, 24, 30
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, let $A_n$ be the set of all positive numbers greater than $1$ and less than $n$ which are coprime to $n$. Find all $n$ such that all the elements of $A_n$ are prime numbers.
