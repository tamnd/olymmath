---
tag: WPA7X9JAH0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2014
    url: https://artofproblemsolving.com/community/c6h3229894
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57140
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2014
    source: hf-ai-mo-aops
    label: Russian TST 2014
---
Given are twenty-two different five-element sets, such that any two of them have exactly two elements in common. Prove that they all have two elements in common.
