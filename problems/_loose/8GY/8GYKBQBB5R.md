---
tag: 8GYKBQBB5R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, A and B, take turns coloring a $25 \times 25$ grid, with A using white and B using black. A starts the game, and each player colors one cell per turn. Once a cell is colored, it cannot be colored again. Can A ensure that, regardless of B's moves, at the end of the game, a king in chess can move across all white cells without passing through any black cells (the king can revisit the same white cell multiple times) according to the rules of chess (the king can move to any horizontally, vertically, or diagonally adjacent cell)?
