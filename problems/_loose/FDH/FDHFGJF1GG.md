---
tag: FDHFGJF1GG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h217766
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38785
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Estonia National Olympiad
---
A pawn is placed on a square of a $ n \times n$ board. There are two types of legal
moves: (a) the pawn can be moved to a neighbouring square, which shares a common side with the current square; or (b) the pawn can be moved to a neighbouring square, which shares a common vertex, but not a common side with the current square. Any two consecutive moves must be of different type. Find all integers $ n \ge 2$ , for which it is possible to choose an initial square and a sequence of moves such that the pawn visits each square exactly once (it is not required that the pawn returns to the initial square).
