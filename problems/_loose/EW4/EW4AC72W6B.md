---
tag: EW4AC72W6B
kind: problem
type: answer
answer: Player B
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=0
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Mathematical Olympiad Rioplatense
---
There are given $2k$ boxes ($k \ge 2$) with $2k-1$ pebbles in each one. A legal move is to choose $2k-2$ boxes and remove one pebble from each one of them. Players $A$ and $B$ make moves alternately; $A$ goes first. A player wins if a move of his empties two boxes. Determine which player has a winning strategy.
