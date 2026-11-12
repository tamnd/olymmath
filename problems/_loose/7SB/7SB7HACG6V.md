---
tag: 7SB7HACG6V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h1623828
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2018
    source: hf-ai-mo-aops
    label: 2018 Canadian Mathematical Olympiad Qualification
---
Let $n$ and $k$ be positive integers with $1 \leq k \leq n$ . A set of cards numbered $1$ to $n$ are arranged randomly in a row from left to right. A person alternates between performing the following moves:

- The leftmost card in the row is moved $k-1$ positions to the right while the cards in positions $2$ through $k$ are each moved one place to the left.

- The rightmost card in the row is moved $k-1$ positions to the left while the cards in positions $n-k+1$ through $n-1$ are each moved one place to the right.

Determine the probability that after some number of moves the cards end up in order from $1$ to $n$ , left to right.
