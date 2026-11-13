---
tag: NTB3SN16KB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2996210
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29826
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229547
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2018
    source: hf-ai-mo-aops
    label: 2018 Argentina National Olympiad
---
There are $n$ knights numbered $1$ to $n$ and a round table with $n$ chairs. The first knight chooses his chair, and from him, the knight number $k+1$ sits $ k$ places to the right of knight number $k$ , for all $1 \le k\le n-1$ (occupied and empty seats are counted). In particular, the second knight sits next to the first. Find all values of $n$ such that the $n$ gentlemen occupy the $n$ chairs following the described procedure.
