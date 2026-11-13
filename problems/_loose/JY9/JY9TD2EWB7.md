---
tag: JY9TD2EWB7
kind: problem
type: answer
answer: \left\lfloor \frac{(m+1)(n+1)}{2} - 1 \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a chessboard with $m$ columns and $n$ rows. In each blanks, an integer is given. If a rectangle $R$ (in this chessboard) has an integer $h$ satisfying the following two conditions, we call $R$ as a 'shelf'.
(i) All integers contained in $R$ are bigger than $h$.
(ii) All integers in blanks, which are not contained in $R$ but meet with $R$ at a vertex or a side, are not bigger than $h$.
Assume that all integers are given to make shelves as much as possible. Find the number of shelves.
