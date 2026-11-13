---
tag: SGF2WTKM71
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261928
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A grid is called $k$-special if in each cell is written a distinct integer such that the set of integers in the grid is precisely the set of positive divisors of $k$. A grid is called $k$-awesome if it is $k$-special and for each positive divisor $m$ of $k$, there exists an $m$-special grid within this $k$-special grid (within meaning you could draw a box in this grid to obtain the new grid). Find the sum of the $4$ smallest integers $k$ for which no $k$-awesome grid exists.

*Proposed by Oliver Hayman*
