---
tag: S0W17BYWHY
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a chessboard 8x8. We have to place $n$ black queens and $n$ white queens, so that no two queens attack. Find the maximal possible $n$.
(Two queens attack each other when they have different colors. The queens of the same color don't attack each other)
