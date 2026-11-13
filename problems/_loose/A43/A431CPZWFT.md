---
tag: A431CPZWFT
kind: problem
type: answer
answer: Olya
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=280
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Olya and Tolya have paints of two opposite colors - white and black. They play the following game on the segment $[0, 1]$. Each round of the game takes place in two stages: one of the players chooses a number $l \in [0, 1]$, and then the other player chooses some segment $J \subseteq [0, 1]$ of length $l$ and recolors all its points in the opposite color. In the next round they switch roles and so on.
After 2024 rounds, the total length $L$ of the white intervals is calculated. If $L > \frac{1}{2}$ then Olya wins, and if $L \le \frac{1}{2}$ then Tolya wins. Initially, the entire segment is painted white. Tolya chooses a number first. Who has a winning strategy?
(Andrey Naradzetski)
