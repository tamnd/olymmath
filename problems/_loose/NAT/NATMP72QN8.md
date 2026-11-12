---
tag: NATMP72QN8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h3337742
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1993 Tournament Of Towns
---
$10$ integers are written in a row. A second row of $10$ integers is formed as follows: the integer written under each integer $A$ of the first row is equal to the total number of integers that stand to the right side of $A$ (in the first row) and are strictly greater than A. A third row is formed by the same way under the second one, and so on.

(a) Prove that after several steps a "zero row" (i.e. a row consisting entirely of zeros) appears.
(b) What is the maximal possible number of non-zero rows (i.e. rows in which at least one entry is not zero)?

(S Tokarev)
