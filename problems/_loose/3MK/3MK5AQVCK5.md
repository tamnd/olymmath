---
tag: 3MK5AQVCK5
kind: problem
type: answer
answer: V=1ifnisodd,V=2ifn\equiv2\bmod4,V=0ifn\equiv0\bmod4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be natural numbers with $m n$ even. Jetze is going to cover an $m \times n$ board (consisting of $m$ rows and $n$ columns) with dominoes, such that each domino covers exactly two squares, dominoes do not stick out or overlap, and all squares are covered by a domino. Merlijn will then color all the dominoes on the board red or blue. Determine the smallest non-negative integer $V$ (depending on $m$ and $n$) such that Merlijn can always ensure that in each row the number of squares covered by a red domino and the number of squares covered by a blue domino differ by at most $V$, no matter how Jetze covers the board.
