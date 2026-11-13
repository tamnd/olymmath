---
tag: PJHCEX9SP1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Middle European Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h225452
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27171
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: memo/2008
    source: hf-ai-mo-aops
    label: 2008 Middle European Mathematical Olympiad
---
Consider a $ n \times n$ checkerboard with $ n > 1, n \in \mathbb{N}.$ How many possibilities are there to put $ 2n - 2$ identical pebbles on the checkerboard (each on a different field/place) such that no two pebbles are on the same checkerboard diagonal. Two pebbles are on the same checkerboard diagonal if the connection segment of the midpoints of the respective fields are parallel to one of the diagonals of the $ n \times n$ square.
