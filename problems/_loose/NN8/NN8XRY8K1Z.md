---
tag: NN8XRY8K1Z
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the least positive integer $n$ such that there exists a group of $n$ people such that:

1. There is no group of four every two of which are friends;
2. For any choice of $k \geq 1$ people among which there are no friends there exists a group of three among the remaining $n-k$ every two of which are friends.
