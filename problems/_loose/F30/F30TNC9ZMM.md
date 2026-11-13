---
tag: F30TNC9ZMM
kind: problem
type: answer
answer: h_{}^{\}(n)=\sum_{k=2}^{}(-1)^{-k}\binom{}{k}(k^{2}-3k+3)^{n-1}k(k-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104634
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $h_{m}^{\prime}(n)$ denote the number of ways to color a $2 \times n$ chessboard using $m$ colors such that adjacent cells have different colors and each color is used at least once. Find the counting formula for $h_{m}^{\prime}(n)$.
