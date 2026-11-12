---
tag: DGD9EVFJBP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3402546
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37490
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Cuba MO
---
There is a board with $2010$ rows and $2001$ columns, on it there is a token located in the upper left box that can perform one of the following operations:

(A) Walk 3 steps horizontally or vertically.
(B) Walk 2 steps to the right and 3 steps down.
(C) Walk 2 steps to the left and 2 steps up.

With the condition that immediately after carrying out an operation on (B) or (C) it is mandatory to take a step to the right before perform the following operation. It is possible to exit the board, so count the number of steps necessary, entering through the other end of the row or column from which it exits, as if the board outside circular (example: from the beginning you can walk to the square located in row $1$ and column $1999$ ). Will it be possible that after $2011$ operations allowed the checker to land exactly on the bottom square right?
