---
tag: YGTR64KZ0G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2031563
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18670
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2020
    source: hf-ai-mo-aops
    label: 2020 Caucasus Mathematical Olympiad
---
Positive integers $n$ , $k>1$ are given. Pasha and Vova play a game on a board $n\times k$ . Pasha begins, and further they alternate the following moves. On each move a player should place a border of length 1 between two adjacent cells. The player loses if after his move there is no way from the bottom left cell to the top right without crossing any order. Determine who of the players has a winning strategy.
