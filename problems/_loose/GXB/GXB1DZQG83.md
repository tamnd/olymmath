---
tag: GXB1DZQG83
kind: problem
type: answer
answer: "42925"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Suppose there are 101 persons sitting around a round table in an arbitrary order. The $k$th person possesses $k$ pieces of cards, $k = 1, \dots, 101$. We call it a *transition* if one transits one of his cards to one of his adjacent persons. Find the minimum positive number $k$, such that whatever the order of the seating, there is a way of no more than $k$ transitions so that each person possesses 51 cards.
