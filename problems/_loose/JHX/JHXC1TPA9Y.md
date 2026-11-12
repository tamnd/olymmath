---
tag: JHXC1TPA9Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2986232
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2020
    source: hf-ai-mo-aops
    label: 2020 Switzerland - Final Round
---
Let $n \ge 2$ be an integer. Consider the following game: Initially, $k$ stones are distributed among the $n^2$ squares of an $n\times n$ chessboard. A move consists of choosing a square containing at least as many stones as the number of its adjacent squares (two squares are adjacent if they share a common edge) and moving one stone from this square to each of its adjacent squares. Determine all positive integers $k$ such that:
(a) There is an initial configuration with $k$ stones such that no move is possible.
(b) There is an initial configuration with $k$ stones such that an infinite sequence of moves is possible.
