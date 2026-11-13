---
tag: ZBGKHN916B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 62nd Ukrainian National Mathematical Olympiad
---
There are 100 cards, each with one of the numbers $1$, $2$, $\ldots$, $100$ written on it, such that each number appears on exactly one card. The cards are stacked in such a way that the numbers $1$, $2$, $\ldots$, $100$ are written from top to bottom in order. Petrik rearranges the cards according to the following rules. If, before his $k$-th move, the numbers on the cards from top to bottom are arranged as follows: $a_1, a_2, \ldots, a_{k-1}, a_k, a_{k+1}, \ldots, a_{100}$, then after his move they are arranged as follows: $a_k, a_{k-1}, \ldots, a_2, a_1, a_{k+1}, \ldots, a_{100}$ (so the order of the cards does not change when $k=1$). Petryk takes turns making moves $1$, $2$, $\ldots$, $100$, and then makes moves $1$, $2$, $\ldots$, $100$ again, and so on. Will the initial arrangement of the cards with the numbers $1$, $2$, $\ldots$, $100$ from top to bottom necessarily be repeated after a finite number of moves?
