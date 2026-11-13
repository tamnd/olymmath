---
tag: XJFMW7FH90
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h147483
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23029
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2006
    source: hf-ai-mo-aops
    label: 2006 IberoAmerican
---
Find all pairs $(a, b)$ of positive integers such that $2a-1$ and $2b+1$ are coprime and $a+b$ divides $4ab+1.$
