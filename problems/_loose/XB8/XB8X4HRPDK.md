---
tag: XB8X4HRPDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73885
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263372
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
Given two 2's, "plus" can be changed to "times" without changing the result: 2+2=2·2. The solution with three numbers is easy too: 1+2+3=1·2·3. There are three answers for the five-number case. Which five numbers with this property has the largest sum?
