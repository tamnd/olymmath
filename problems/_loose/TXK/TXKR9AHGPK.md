---
tag: TXKR9AHGPK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of $2n$ cards numbered $1, 2, 3, \cdots, 2n$ is transformed into $n+1, 1, n+2, 2, \cdots, n-1, 2n, n$.
That is, the first $n$ cards are moved to the 2nd, 4th, ..., 2n-th positions, while the remaining $n$ cards are placed in the odd positions, i.e., the 1st, 3rd, 5th, ..., (2n-1)-th positions, which is called a "perfect" shuffle. Determine for which $n$, starting from the sequence $1, 2, \cdots, 2n$, the cards can be restored to their original order after a "perfect" shuffle.
(28th International Mathematical Olympiad Candidate Problem, 1987)
