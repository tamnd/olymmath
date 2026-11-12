---
tag: S1ZDA75H7W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 AIME Problems
    url: https://artofproblemsolving.com/community/c6h342378
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4526
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: aime
    source: hf-ai-mo-aops
    label: 2010 AIME Problems
---
Define a *T-grid* to be a $ 3\times3$ matrix which satisfies the following two properties:

(1) Exactly five of the entries are $ 1$ 's, and the remaining four entries are $ 0$ 's.
(2) Among the eight rows, columns, and long diagonals (the long diagonals are $ \{a_{13},a_{22},a_{31}\}$ and $ \{a_{11},a_{22},a_{33}\}$ , no more than one of the eight has all three entries equal.

Find the number of distinct T-grids.
