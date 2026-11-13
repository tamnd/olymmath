---
tag: RV6HVKMKR0
kind: problem
type: answer
answer: ⌊n/2⌋ + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
$n$ is a positive integer. Consider all $2^n$ sequences of numbers $0$ and $1$ with length $n$. At first, some of these numbers are marked. Two sequences are called *neighbors* if they have the same value in all their $n$ digits except for one. In each step, a non-marked sequence that has at least two marked neighbors is also marked. The goal is to have all the sequences to be marked at the end. Find the least number of initially marked sequences such that the goal is achievable.
