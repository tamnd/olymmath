---
tag: TXRT49QMAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h485753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73869
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2002
    source: hf-ai-mo-aops
    label: 2002 Stanford Mathematics Tournament
---
Solve for all real $x$ that satisfy the equation $4^x=2^x+6$
