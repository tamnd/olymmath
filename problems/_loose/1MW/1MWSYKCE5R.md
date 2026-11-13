---
tag: 1MWSYKCE5R
kind: problem
type: answer
answer: A
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A flea is initially at the origin of the Cartesian plane and can move to integer coordinate points by choosing one of the following three moves each time:

- from the point $(x, y)$ it jumps to the point $(x, y+5)$;
- from the point $(x, y)$ it jumps to the point $(x-2, y-3)$;
- from the point $(x, y)$ it jumps to the point $(x+4, y-9)$.

How many paths, realizable by the flea with its moves, lead from the origin $(0,0)$ to the point $(0,2016)$?
(A) none
(B) precisely 1
(C) a number between 5 and 20
(D) a number between 20 and 100
(E) infinitely many
