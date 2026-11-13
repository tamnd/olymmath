---
tag: AVEZ2TH770
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h590955
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73857
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2001
    source: hf-ai-mo-aops
    label: 2001 Stanford Mathematics Tournament
---
Find the least $n$ such that any subset of ${1,2,\dots,100}$ with $n$ elements has 2 elements with a diﬀerence of 9.
