---
tag: RVDF46TQVT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2919936
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44449
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Iran MO (3rd Round)
---
For each natural number $k$ find the least number $n$ such that in every tournament with $n$ vertices, there exists a vertex with in-degree and out-degree at least $k$ .
(Tournament is directed complete graph.)
