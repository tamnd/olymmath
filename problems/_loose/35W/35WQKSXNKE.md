---
tag: 35WQKSXNKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022187
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28962
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
In a team of guards, each is assigned a different positive integer. For any two guards, the ratio of the two numbers assigned to them is at least $3:1$ . A guard assigned the number $n$ is on duty for $n$ days in a row, off duty for $n$ days in a row, back on duty for $n$ days in a row, and so on. The guards need not start their duties on the same day. Is it possible that on any day, at least one in such a team of guards is on duty?
