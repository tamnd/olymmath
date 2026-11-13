---
tag: SV537KQG6S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h454556
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4177
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2009
    source: hf-ai-mo-aops
    label: 2009 Stanford Mathematics Tournament
---
No math tournament exam is complete without a self referencing question. What is the product of
the smallest prime factor of the number of words in this problem times the largest prime factor of the
number of words in this problem
