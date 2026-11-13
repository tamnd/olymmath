---
tag: VBJEBV0WB8
kind: problem
type: answer
answer: impossible
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Silk_Road_Mathematics_Competition/train/0000.parquet#row=37
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: silk-road
    source: hf-mathnet
    label: Silk Road Mathematics Competition XVI Silk Road Math Competition
---
Let $Q$ be a square of size $12 \times 12$ given on an infinite cell grid. Student wants to paint some (not necessary all!) cells with seven colors (each cell with one color), such that no two three-cell rectangles (out of 288) with centers in $Q$ are colored identically. Is this possible?
(Two three-cell rectangles are colored identically, if it is possible to shift and/or rotate so that each cell of a rectangle matches the same color cell of the other rectangle.)
