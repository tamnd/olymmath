---
tag: YPD76HQFM8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h339717
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73915
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
Ten teams of five runners each compete in a cross-country race. A runner finishing in *n*th place contributes *n* points to his team, and there are no ties. The team with the lowest score wins. Assuming the first place team does not have the same score as any other team, how many winning scores are possible?
