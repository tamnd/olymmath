---
tag: FSD4Y4E6QS
kind: problem
type: answer
answer: \{1, 2, 4, 8, 16, 32, 64, 96, 100\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The set $M$ consists of integers, the smallest of which is $1$ and the greatest $100$. Each member of $M$, except $1$, is the sum of two (possibly identical) numbers in $M$. Of all such sets, find one with the smallest possible number of elements.
