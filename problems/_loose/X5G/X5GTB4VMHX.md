---
tag: X5GTB4VMHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984872
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60510
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2007
    source: hf-ai-mo-aops
    label: 2007 Switzerland - Final Round
---
Let $M\subset \{1, 2, 3, . . . , 2007\}$ a set with the following property: Among every three numbers one can always choose two from $M$ such that one is divisible by the other. How many numbers can $M$ contain at most?
