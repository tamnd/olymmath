---
tag: KQ2WGGAT5S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h391195
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5946
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
A $1\times 1\times 1$ cube is placed on an $8\times 8$ chessboard so that its bottom face coincides with a square of the chessboard. The cube rolls over a bottom edge so that the adjacent face now lands on the chessboard. In this way, the cube rolls around the chessboard, landing on each square at least once. Is it possible that a particular face of the cube never lands on the chessboard?
