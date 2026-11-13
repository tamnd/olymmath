---
tag: DS3B0X2ASY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Bangladesh Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1605903
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30846
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2018
    source: hf-ai-mo-aops
    label: 2018 Bangladesh Mathematical Olympiad
---
Find all the pairs of integers $(m,n)$ satisfying the equality $3(m^2+n^2)-7(m+n)=-4$
