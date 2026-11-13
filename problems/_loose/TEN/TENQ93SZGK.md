---
tag: TENQ93SZGK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90097
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=34
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ten different points are marked on a circle. Two players $A$ and $B$ play the following game. $A$ moves first and the players alternate their moves. In each of the moves a player connects two of the points with a straight line segment. A player whose segment crosses a segment previously drawn will lose the game. Which player has a winning strategy and what is the strategy.
