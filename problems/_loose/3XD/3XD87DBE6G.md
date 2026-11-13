---
tag: 3XD87DBE6G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2966916
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53864
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Romania EGMO TST
---
Determine all non-negative integers $n$ for which there exist two relatively prime non-negative integers $x$ and $y$ and a positive integer $k\geqslant 2$ such that $3^n=x^k+y^k$ .
