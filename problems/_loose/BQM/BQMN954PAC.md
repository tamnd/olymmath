---
tag: BQMN954PAC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2016
    url: https://artofproblemsolving.com/community/c6h3056450
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57181
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2016
    source: hf-ai-mo-aops
    label: Russian TST 2016
---
A simple graph has $N{}$ vertices and less than $3(N-1)/2$ edges. Prove that its vertices can be divided into two non-empty groups so that each vertex has at most one neighbor in the group it doesn't belong to.
