---
tag: VJZ0253JEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h5643
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2003
    source: hf-ai-mo-aops
    label: 2003 IMO Shortlist
---
Let $x_0, x_1, x_2, \ldots$ be the sequence defined by $x_i= 2^i$ if $0 \leq i \leq 2003$ $x_i=\sum_{j=1}^{2004} x_{i-j}$ if $i \geq 2004$ Find the greatest $k$ for which the sequence contains $k$ consecutive terms divisible by 2004.
