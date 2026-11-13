---
tag: D28WZZD4JQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Danube Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1536294
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15309
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2017
    source: hf-ai-mo-aops
    label: 2017 Danube Mathematical Olympiad
---
Let n be a positive interger. Let n real numbers be wrote on a paper. We call a "transformation" :choosing 2 numbers $a,b$ and replace both of them with $a*b$ . Find all n for which after a finite number of transformations and any n real numbers, we can have the same number written n times on the paper.
