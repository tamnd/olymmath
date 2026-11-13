---
tag: 43MAHM9BBR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, there are $2n$ cards stacked, numbered from 1 to $2n$ from top to bottom. We perform the following operation: each time, we extract all the cards in even positions from top to bottom, maintaining their order and placing them at the bottom of the stack. For example, when $n=3$, the initial order is 123456, and after the operation, we get 135246, 154326, 142536, 123456. Prove: for any positive integer $n$, the order of the stack will return to its initial state after no more than $2n-2$ operations.

Prove: for any positive integer $n$, the order of the stack will return to its initial state after no more than $2n-2$ operations.
