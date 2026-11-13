---
tag: 9Q9KCH2QYH
kind: problem
type: answer
answer: "Yes"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=308
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
Is it possible to fill in a table $7 \times 7$ with $24$ ones and $25$ zeros so that:
1) for each cell containing one, sum of numbers in neighbour cells equals one,
2) for each cell containing zero, sum of numbers in neighbour cells does not equal one?
(Two cells are neighbours if they have a common side.)
