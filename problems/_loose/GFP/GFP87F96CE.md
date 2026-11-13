---
tag: GFP87F96CE
kind: problem
type: answer
answer: k \leq n \leq 2k - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $k$, a pigeon and a seagull play a game on an $n\times n$ board. The pigeon goes first, and they take turns doing the operations. The pigeon will choose $m$ grids and lay an egg in each grid he chooses. The seagull will choose a $k\times k$ grids and eat all the eggs inside them. If at any point every grid in the $n\times n $ board has an egg in it, then the pigeon wins. Else, the seagull wins. For every integer $n\geq k$, find all $m$ such that the pigeon wins.

*Proposed by amano_hina*
