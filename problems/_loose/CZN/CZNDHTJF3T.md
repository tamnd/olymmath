---
tag: CZNDHTJF3T
kind: problem
type: answer
answer: (1 + sqrt(5)) / 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=20
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
Aino and Väinö start to play the game GCD($m, n$) where $m$ and $n$ are positive integers. In the beginning there are two piles of stones on the table, one with $m$ stones, another with $n$ stones. The one whose turn it is, takes away a number of stones from one of the piles. This number is a multiple of the number of stones in the other pile. Aino starts, and the players take turns until one of the piles is empty. The one who manages to empty a pile, wins. Prove that there is an $\alpha > 1$ such that if $m$ and $n$ are positive integers with $m > \alpha n$, then Aino has a winning strategy in the game GCD($m, n$), whereas if $\alpha n > m > n$ Väinö has.
