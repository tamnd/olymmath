---
tag: 5XEE4GCFDP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By a $\emph{tile}$ we mean a polyomino (i.e. a finite edge-connected set of cells in the infinite grid). There are many ways to place a tile in the infinite table (rotation is allowed but we cannot flip the tile). We call a tile $\textbf{T}$ special if we can place a permutation of the positive integers on all cells of the infinite table in such a way that each number would be maximum between all the numbers that tile covers in at most one placement of the tile.

1. Prove that each square is a special tile.
2. Prove that each non-square rectangle is not a special tile.
3. Prove that tile $\textbf{T}$ is special if and only if it looks the same after $90^\circ$ rotation.
