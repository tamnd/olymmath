---
tag: R8GAP4N6R9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there exist a configuration of *exactly* 1 black king, $n$ black chess pieces (each of which can be a pawn, knight, bishop, rook, or queen), and a white *anti-king* on a standard 8x8 board in which the white *anti-king* is not under attack, but will be if it is moved. Compute the minimal value of $n$.

*An *anti-king* can move to any square is **not** 1 square vertically, horizontally, or diagonally. It can also capture undefended pieces.

*2022 CCA Math Bonanza Team Round #4*
