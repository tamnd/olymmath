---
tag: Z7TDKSCB0N
kind: problem
type: answer
answer: \frac{1}{2}n(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ marbles. Arbitrarily divide them into two piles, find the product of the number of marbles in the two piles, then arbitrarily divide one of the piles into two piles, find the product of the number of marbles in these two piles, and so on. Each time, arbitrarily divide one of the piles into two piles, find the product of the number of marbles in these two piles, until no more division is possible. Let the sum of all products be $S$, find the possible values of $S$.
