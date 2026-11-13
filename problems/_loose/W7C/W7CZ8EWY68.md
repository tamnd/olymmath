---
tag: W7CZ8EWY68
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Some cells of a $60 \times 60$ grid is colored black and the rest are colored white. Two players $A$ and $B$ take turns making the following type of move starting from player $A$: choose a black cell and flip the colors of the rectangle that starts on the top-left corner of the grid and ends on the chosen black cell as the bottom-right corner. A player that is not able to make a move - there is no black cell on their turn to move - loses. Find all colorings such that the player $B$ can win regardless of how player $A$ plays.
(Nyamdavaa Amar)
