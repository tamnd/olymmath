---
tag: NAAG6B9B4B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(OIM 2019 and previous polynomials)

We have $n$ coins aligned from left to right. If $k$ coins are on the heads side, we flip the $k$-th (starting from 1); if they are all on the tails side, we stop.

- Show that this process always terminates.
- Calculate the average number of steps required over all possible initial positions.
