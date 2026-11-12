---
tag: GJ442ZCD6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h412738
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2003 Tournament Of Towns
---
$25$ checkers are placed on $25$ leftmost squares of $1 \times N$ board. Checker can either move to the empty adjacent square to its right or jump over adjacent right checker to the next square if it is empty. Moves to the left are not allowed. Find minimal $N$ such that all the checkers could be placed in the row of $25$ successive squares but in the reverse order.
