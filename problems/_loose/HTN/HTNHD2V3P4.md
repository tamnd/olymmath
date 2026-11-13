---
tag: HTNHD2V3P4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h463466
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73850
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263337
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
Peter is randomly ﬁlling boxes with candy. If he has 10 pieces of candy and 5 boxes in a row labeled A, B, C, D, and E, how many ways can he distribute the candy so that no two adjacent boxes are empty?
