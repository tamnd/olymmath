---
tag: NPW97XFG7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h2308100
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20094
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2021
    source: hf-ai-mo-aops
    label: 2021 Hong Kong TST
---
There is an $n\times n$ chessboard where $n\geq 4$ is a positive even number. The cells of the chessboard are coloured black and white such that adjacent cells sharing a common side have different colours. Let $A$ and $B$ be two interior cells (which means cells not lying on an edge of the chessboard) of distinct colours. Prove that a chess piece can move from $A$ to $B$ by moving across adjacent cells such that every cell of the chessboard is passed through exactly once.
