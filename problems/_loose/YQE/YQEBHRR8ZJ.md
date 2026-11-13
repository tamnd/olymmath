---
tag: YQEBHRR8ZJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $1, 2, \dots , n$ are written on a blackboard and then erased via the following process:

- Before any numbers are erased, a pair of numbers is chosen uniformly at random and circled.

- Each minute for the next $n -1$ minutes, a pair of numbers still on the blackboard is chosen uniformly at random and the smaller one is erased.

- In minute $n$, the last number is erased.

What is the probability that the smaller circled number is erased before the larger?

*Proposed by Ethan Tan*
