---
tag: RWBGAGQ43G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h463457
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73842
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2000
    source: hf-ai-mo-aops
    label: 2000 Stanford Mathematics Tournament
---
How many permutations of $123456$ have exactly one number in the correct place?
