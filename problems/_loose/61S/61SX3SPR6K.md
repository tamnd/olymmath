---
tag: 61SX3SPR6K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h822
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25398
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=144965
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/2000
    source: hf-ai-mo-aops
    label: 2000 IMO Shortlist
---
For a positive integer $n$ , let $d(n)$ be the number of all positive divisors of $n$ . Find all positive integers $n$ such that $d(n)^3=4n$ .
