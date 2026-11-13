---
tag: D8PNGEBRB9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place $n^{2}-1(n \geqslant 3)$ chess pieces on an $n$ by $n$ chessboard. The chess pieces are numbered as
$$
(1,1), \cdots,(1, n),(2,1), \cdots,(2, n), \cdots,(n, 1), \cdots,(n, n-1) \text {. }
$$

If the chess piece numbered $(i, j)$ is exactly in the $i$-th row and $j$-th column of the chessboard, i.e., the $n$-th row and $n$-th column is empty, then the chessboard is said to be in a "standard state". Now, place the $n^{2}-1$ chess pieces randomly on the chessboard, with one piece per cell, and in each step, move a chess piece from a cell adjacent to the empty cell into the empty cell (two cells are adjacent if they share a common edge). Question: Can the chessboard be brought to a standard state from any initial placement after a finite number of moves? Prove your conclusion.
