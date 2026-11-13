---
tag: XMY1XH6D70
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h461249
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8072
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210129
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2012
    source: hf-ai-mo-aops
    label: 2012 International Zhautykov Olympiad
---
A set of (unit) squares of a $n\times n$ table is called *convenient* if each row and each column of the table contains at least two squares belonging to the set. For each $n\geq 5$ determine the maximum $m$ for which there exists a *convenient* set made of $m$ squares, which becomes in*convenient* when any of its squares is removed.
