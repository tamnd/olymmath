---
tag: B61YNXDV8Q
kind: problem
type: answer
answer: "10000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. There is an infinite number of cards, each one of them having a non-negative integer written on it, such that for each integer $l \geq 0$, there are exactly $n$ cards that have the number $l$ written on them. A move consists of picking $100$ cards from the infinite set of cards and discarding them. Find the least possible value of $n$ for which there is an infinitely long series of moves such that for each positive integer $k$, the sum of the numbers written on the $100$ chosen cards during the $k$-th move is equal to $k$.
