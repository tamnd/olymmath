---
tag: T134ZG8RDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a board with $2 m$ rows and $2 n$ columns, where $m$ and $n$ are positive integers. You may place one pawn on a square of this board, but not on the bottom-left square or the top-right square. Then a snail starts a walk over the board. The snail starts in the bottom-left square and may move horizontally and vertically. The snail does not come to the square with the pawn, but wants to visit every other square exactly once, with the top-right square being its endpoint. On which squares can you place the pawn so that the snail can succeed in its plan?
