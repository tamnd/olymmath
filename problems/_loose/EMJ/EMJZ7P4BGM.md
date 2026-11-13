---
tag: EMJZ7P4BGM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2023
    url: https://artofproblemsolving.com/community/c6h3230591
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26674
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2023
    source: hf-ai-mo-aops
    label: Kvant 2023
---
Two 100-digit binary sequences are given. In one operation, one may insert (possibly at the beggining or end) or remove one or more identical digits from a sequence. What is the smallest $k{}$ for which we can transform the first sequence into the second one in no more than $k{}$ operations?

*Proposed by V. Novikov*
