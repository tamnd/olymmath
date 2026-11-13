---
tag: 1XEMZ7MC4E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place chess pieces on an $n \times n$ chessboard, with at most 1 piece in each small square, and satisfying the following conditions: If a small square does not have a piece, then the total number of pieces in the small squares on the horizontal line and vertical line passing through this square is at least $n$. Prove: The total number of chess pieces placed on the chessboard is at least $\frac{1}{2} n^{2}$. (13th IMO)
