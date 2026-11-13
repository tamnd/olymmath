---
tag: 369XXJPVBT
kind: problem
type: answer
answer: Lucas (the second player) has a winning strategy.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2016
    source: hf-mathnet
    label: Argentina Argentine National Olympiad 2016
---
Agustin and Lucas take turns in marking one cell at a time in a $101 \times 101$ grid. Agustin starts the game. A cell cannot be marked if there are already two marked cells in its row or in its column. The one who cannot move loses. Decide which player has a winning strategy.
