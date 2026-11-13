---
tag: CX8X5WC3FZ
kind: problem
type: answer
answer: 2^64 - 421278
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
An $8 \times 8$ square is subdivided into $64$ unit squares like a chessboard. Some of these $64$ unit squares are black, all others are white. Such a configuration is called *spotty* if it contains at least two black unit squares each of which shares an edge with a white unit square to its left or above it.
How many spotty configurations are there?
