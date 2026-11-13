---
tag: NRXCCXEK82
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2013131
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49518
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245313
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2002
    source: hf-ai-mo-aops
    label: 2002 Abels Math Contest (Norwegian MO)
---
Find all integers $k$ such that both $k + 1$ and $16k + 1$ are perfect squares.
