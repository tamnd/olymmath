---
tag: J2X8K6KJJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h2842048
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2022
    source: hf-ai-mo-aops
    label: 2022 Iran MO (2nd round)
---
There is an $n*n$ table with some unit cells colored black and the others are white.
In each step , Amin takes a $row$ with exactly one black cell in it , and color all cells in that black cell's $column$ red.
While Ali , takes a $column$ with exactly one black cell in it , and color all cells in that black cell's $row$ red.
Prove that Amin can color all the cells red , iff Ali can do so.
