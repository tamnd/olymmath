---
tag: AYWJ2PARD3
kind: problem
type: answer
answer: n = 2, or n = 2^k + 1, or n = 2^k + 2 for k ≥ 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian National Mathematical Olympiad
---
$n$ girls are standing in a circle, each holding exactly 1 card. One girl gives her card to the girl on her left, who in turn gives 2 cards to the girl on her left. The girl who got the cards gives 1 card to the girl on her left. The girl who got the card gives 2 cards to the girl on her left. Continuing this way, each girl gives alternating 1 or 2 cards to the girl on her left. Anyone who has no card leaves the game immediately. Find all values of $n$ such that all cards are collected by one girl.
