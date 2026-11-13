---
tag: FNRKKW8G30
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261502
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two kids $A$ and $B$ play a game as follows: from a box containing $n$ marbles ($n > 1$), they alternately take some marbles for themselves, such that:
1. $A$ goes first.
2. The number of marbles taken by $A$ in his first turn, denoted by $k$, must be between $1$ and $n - 1$, inclusive.
3. The number of marbles taken in a turn by any player must be between $1$ and $k$, inclusive.
The winner is the one who takes the last marble. Determine all natural numbers $n$ for which $A$ has a winning strategy
