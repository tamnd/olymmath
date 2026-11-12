---
tag: 76BJSB9ASQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3397469
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28418
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1997 Tournament Of Towns
---
Initially there is a checker on every square of a $1\times n$ board. The first move consists of moving a checker to an adjacent square thus creating a stack of two checkers. Then each time when making a move, one can choose a stack and move it in either direction as many squares on the board as there are checkers in the stack. If after the move the stack lands on a non-empty square, it is placed on top of the stack which is already there. Prove that it is possible to stack all the checkers on one square in $n - 1$ moves.

(A Shapovalov)
