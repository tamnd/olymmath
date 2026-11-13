---
tag: AEJNMMTEE8
kind: problem
type: answer
answer: floor((3(m-1))/2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=155
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
Consider a tournament with $n$ participants, where $n = 2m - 1$ and $m \ge 1$. This tournament has no draws, and each pair of students plays against each other exactly once. The students are listed based on their number of wins, with those having an equal number of wins being listed alphabetically. What is the maximum number of wins that the $m$-th student can achieve in this scenario?
