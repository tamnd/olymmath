---
tag: KRDA6VQFB2
kind: problem
type: answer
answer: "3800"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
Some cells of a $200 \times 200$ checkered square contain red or blue tokens - one per cell; the other cells are empty. We say that a token *sees* another token if they are situated either in one row or in one column. Assume that each red token sees exactly five blue tokens (and, perhaps, some red tokens), and each blue token sees exactly five red tokens (and, perhaps, some blue tokens). Determine the maximal possible total number of tokens on the board.
