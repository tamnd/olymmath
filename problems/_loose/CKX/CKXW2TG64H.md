---
tag: CKXW2TG64H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h370162
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44045
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1997
    source: hf-ai-mo-aops
    label: 1997 Iran MO (2nd round)
---
We have a $n\times n$ table and we've written numbers $0,+1 \ or \ -1$ in each $1\times1$ square such that in every row or column, there is only one $+1$ and one $-1$ . Prove that by swapping the rows with each other and the columns with each other finitely, we can swap $+1$ s with $-1$ s.
