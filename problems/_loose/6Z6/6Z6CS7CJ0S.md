---
tag: 6Z6CS7CJ0S
kind: problem
type: answer
answer: k = 1, 2, 3, 6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252831
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $k$ such that for every $n\in\mathbb N$, if there are $k$ factors (not necessarily distinct) of $n$ so that the sum of their squares is $n$, then there are $k$ factors (not necessarily distinct) of $n$ so that their sum is exactly $n$.
