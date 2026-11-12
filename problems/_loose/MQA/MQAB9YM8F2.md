---
tag: MQAB9YM8F2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h3318540
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2002
    source: hf-ai-mo-aops
    label: 2002 Argentina National Olympiad
---
Initially on the blackboard all the integers from $1$ to $2002$ inclusive are written in one line and in some order, without repetitions. In each step, the first and second numbers of the line are deleted and the absolute value of the subtraction of the two numbers that have just been deleted is written at the beginning of the line; the other numbers are not modified in that step, and there is a new line that has one less number than the previous step. After completing $2001$ steps, only one number remains on the board.
Determine all possible values of the number left on the board by varying the order of the $2002$ numbers on the initial line (and performing the $2001$ steps).
