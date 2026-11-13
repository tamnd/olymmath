---
tag: 74YBV9BHQG
kind: problem
type: answer
answer: "47"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=53
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian mathematical olympiad
---
Given an $8 \times 8$ chessboard. Choose one of its diagonals and call the 8 cells of this diagonal *a fence*. The Rook starts from an arbitrary square outside the fence and makes some moves so that it does not get to one square twice, and it does not stand on the squares of the fence. Find the maximal possible number of jumps over the fence on the Rook's route. (R. Zhenodarov)
