---
tag: PQ9YDE80VX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338369
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73896
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263383
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
When the celebrated German mathematician Karl Gauss (1777-1855) was nine years old, he was asked to add all the integers from 1 through 100. He quickly added 1 and 100, 2 and 99, and so on for 50 pairs of numbers each adding in 101. His answer was 50 · 101=5,050. Now find the sum of all the digits in the integers from 1 through 1,000,000 (i.e. all the digits in those numbers, not the numbers themselves).
