---
tag: 7NP9M4J5WQ
kind: problem
type: answer
answer: "151"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88368
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For natural numbers arranged in a circle, we say they are in a zig-zag order if each number is either greater or smaller than both of its neighbors. A pair of adjacent numbers is called good if, after their removal, the remaining numbers are still in a zig-zag order.

Numbers from 1 to 300 are arranged in a zig-zag order. What is the smallest possible number of good pairs of adjacent numbers?
