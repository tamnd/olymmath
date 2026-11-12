---
tag: AR7EV5CX8Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h3495207
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Taiwan Mathematics Olympiad
---
Find all positive integers $n$ satisfying the following: there exists a way to fill in $1, \cdots, n^2$ into a $n \times n$ grid so that each block has exactly one number, each number appears exactly once, and:

1. For all positive integers $1 \leq i < n^2$ , $i$ and $i + 1$ are neighbors (two numbers neighbor each other if and only if their blocks share a common edge.)
2. Any two numbers among $1^2, \cdots, n^2$ are not in the same row or the same column.
