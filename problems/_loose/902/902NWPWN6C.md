---
tag: 902NWPWN6C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165937
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2015
    source: hf-ai-mo-aops
    label: 2015 Princeton University Math Competition
---
Let $f$ be a function which takes in $0, 1, 2$ and returns $0, 1, $ or $2$ . The values need not be distinct: for instance we could have $f(0) = 1, f(1) = 1, f(2) = 2$ . How many such functions are there which satisfy $$f(2) + f(f(0)) + f(f(f(1))) = 5?$$
