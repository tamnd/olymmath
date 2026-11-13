---
tag: T8628Q2B9D
kind: problem
appearances:
  - at: pumac/2010/ca5
    primary: true
  - at: pumac/2010/cb7
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_CombinatoricsA.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a rook is "attacking" another rook on a chessboard if the two rooks are in the same row or column of the chessboard and there is no piece directly between them. Let $n$ be the maximum number of rooks that can be placed on a $6\times 6$ chessboard such that each rook is attacking at most one other. How many ways can $n$ rooks be placed on a $6\times 6$ chessboard such that each rook is attacking at most one other?
