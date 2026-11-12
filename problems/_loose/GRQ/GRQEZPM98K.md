---
tag: GRQEZPM98K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3058061
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2000
    source: hf-ai-mo-aops
    label: 2000 Saint Petersburg Mathematical Olympiad
---
Cells of a $2000\times2000$ board are colored according to the following rules:

1)At any moment a cell can be colored, if none of its neighbors are colored

2)At any moment a $1\times2$ rectangle can be colored, if exactly two of its neighbors are colored.

3)At any moment a $2\times2$ squared can be colored, if 8 of its neighbors are colored

(Two cells are considered to be neighboring, if they share a common side). Can the entire $2000\times2000$ board be colored?

*Proposed by K. Kohas*
