---
tag: 45PZ11JQ08
kind: problem
appearances:
  - at: pumac/2017/ca7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $N$ is the number of ways to place 16 jumping rooks on an $8\times 8$ chessboard such that each rook attacks exactly two other rooks, find the remainder when $N$ is divided by 1000. (A jumping rook is said to attack a square if the square is in the same row or in the same column as the rook.)
