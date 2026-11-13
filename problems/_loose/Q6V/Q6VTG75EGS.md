---
tag: Q6VTG75EGS
kind: problem
type: answer
answer: \binom{n}{k}\binom{2k}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=29
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2011
    source: hf-mathnet
    label: Baltic Way Baltic Way 2011 Problem Shortlist
---
A deck consists of $3n$ cards, $n$ each colored red, green and blue in denominations $1$ through $n$. We choose a subset $S$ of the denominations and deal all cards of the chosen denominations into three equal size hands to players designated red, green and blue in such a way that no player receives a card of her own color. Prove that the number of deals for which the denominations appearing in the red player's hand are $1, 2, \dots, k$ equals $\binom{n}{k}\binom{2k}{k}$. (So it doesn't depend on the size of $S$.)
