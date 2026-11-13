---
tag: 6YD1HWNEBD
kind: problem
type: answer
answer: Player B wins if and only if n is congruent to 6 or 7 modulo 8; otherwise Player A wins.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=71
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina XXI Olimpiada Matemática Rioplatense
---
Given a set of several non-negative integers, a legal move consists in selecting a positive integer $a$ out of the set and perform one of these operations:
* If $a$ is odd, it is replaced by $a-1$.
* If $a$ is even, it is replaced by either $a-1$ or $a-2$.
Two players, A and B, make legal moves in turns, starting from a set with the numbers $1, 2, \ldots, n$; A plays first. One player wins if after their move, a set of $n$ zeroes is obtained (so there are no more possible legal moves). For each $n$, determine which player has a winning strategy.
