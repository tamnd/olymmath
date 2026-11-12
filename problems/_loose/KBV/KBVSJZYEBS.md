---
tag: KBVSJZYEBS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1165945
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12956
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
Define the sequence $a_i$ as follows: $a_1 = 1, a_2 = 2015$ , and $a_n = \frac{na_{n-1}^2}{a_{n-1}+na_{n-2}}$ for $n > 2$ . What is the least $k$ such that $a_k < a_{k-1}$ ?
