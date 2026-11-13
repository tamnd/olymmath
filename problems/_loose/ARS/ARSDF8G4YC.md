---
tag: ARSDF8G4YC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h137040
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40565
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2007
    source: hf-ai-mo-aops
    label: 2007 Greece National Olympiad
---
Given a $2007\times 2007$ array of numbers $1$ and $-1$ , let $A_{i}$ denote the product of the entries in the $i$ th row, and $B_{j}$ denote the product of the entries in the $j$ th column. Show that
$$A_{1}+A_{2}+\cdots +A_{2007}+B_{1}+B_{2}+\cdots +B_{2007}\neq 0.$$
