---
tag: FKENP0YY86
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
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 2
---
Consider a $2024 \times 2024$ grid fully tiled using $1 \times 2$ and $2 \times 1$ dominoes without overlap. A robot is placed on one of the cells. It moves from one cell of a domino to the other, then continues in the same direction to the next domino, if such exists; otherwise, it stops. Is it possible for the robot to eventually return to its starting cell?
