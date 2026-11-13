---
tag: KNFVRX121Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1294021
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15488
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2017
    source: hf-ai-mo-aops
    label: 2017 Hong Kong TST
---
In a committee there are $n$ members. Each pair of members are either friends or enemies. Each committee member has exactly three enemies. It is also known that for each committee member, an enemy of his friend is automatically his own enemy. Find all possible value(s) of $n$
