---
tag: CQ2GSR3PMD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Dule moves on an infinite chessboard (a plane tiled with squares), while a bee moves on an infinite honeycomb (a plane tiled with regular hexagons). Both start from a predetermined initial field (fields are squares for Dule, and hexagons for the bee), and in each step, they must move to an adjacent field (fields are adjacent if they share an edge) and they cannot visit a field they have already been to. For any natural number $n$, prove that the bee has more possible paths of $n$ steps than Dule.
