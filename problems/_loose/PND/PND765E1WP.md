---
tag: PND765E1WP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h534939
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9664
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2013
    source: hf-ai-mo-aops
    label: 2013 Iran MO (2nd Round)
---
Suppose a $m \times n$ table. We write an integer in each cell of the table. In each move, we chose a column, a row, or a diagonal (diagonal is the set of cells which the difference between their row number and their column number is constant) and add either $+1$ or $-1$ to all of its cells. Prove that if for all arbitrary $3 \times 3$ table we can change all numbers to zero, then we can change all numbers of $m \times n$ table to zero.

(*Hint*: First of all think about it how we can change number of $ 3 \times 3$ table to zero.)
