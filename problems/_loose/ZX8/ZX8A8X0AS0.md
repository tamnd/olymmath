---
tag: ZX8A8X0AS0
kind: problem
type: answer
answer: \binom{n}{k}n(n-1)\ldots(n-k+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=812
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1971
    source: hf-numinamath-1-5
    label: XXII OM - II - Problem 1
---
In how many ways can $ k $ fields of a chessboard $ n \times n $ ($ k \leq n $) be chosen so that no two of the selected fields lie in the same row or column?
