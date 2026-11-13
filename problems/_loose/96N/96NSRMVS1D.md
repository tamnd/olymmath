---
tag: 96NSRMVS1D
kind: problem
type: answer
answer: n\equiv0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $n>1$, the numbers $1,2,3, \ldots, n$ are written in order on a blackboard. The following moves are possible.
(i) Take three adjacent numbers $x, y, z$ whose sum is a multiple of 3 and replace them with $y, z, x$.
(ii) Take two adjacent numbers $x, y$ whose difference is a multiple of 3 and replace them with $y, x$.
For example we could take: $1,2,3,4 \xrightarrow{(i)} 2,3,1,4 \xrightarrow{(i i)} 2,3,4,1$
Find all $n$ such that the initial list can be transformed into $n, 1,2, \ldots, n-1$ after a finite number of moves.
