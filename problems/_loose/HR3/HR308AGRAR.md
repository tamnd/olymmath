---
tag: HR308AGRAR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. There is a pawn in one of the cells of an $n\times n$ table. The pawn moves from an arbitrary cell of the $k$th column, $k \in \{1,2, \cdots, n \}$, to an arbitrary cell in the $k$th row. Prove that there exists a sequence of $n^{2}$ moves such that the pawn goes through every cell of the table and finishes in the starting cell.
