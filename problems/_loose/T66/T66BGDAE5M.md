---
tag: T66BGDAE5M
kind: problem
type: answer
answer: 2^{n}-n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and there are $2^{n}$ weights with distinct masses. Each weighing involves dividing the current weights into two groups of equal number and placing them on a balance to determine which group is heavier, then keeping the heavier group (if the two groups have the same mass, either group can be kept). After $n$ weighings, one weight remains. Question: What is the minimum rank, from heaviest to lightest, of this weight among the original $2^{n}$ weights?
