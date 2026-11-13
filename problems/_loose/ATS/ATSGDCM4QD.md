---
tag: ATSGDCM4QD
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 1$ be an integer. Morgane initially has $n$ piles, each containing one coin. She then allows herself operations of the following form: she chooses two piles, takes as many coins from the first pile as from the second, and forms a new pile with the coins she has taken.

Determine, as a function of $n$, the smallest number of non-empty piles that Morgane can obtain from such operations.
