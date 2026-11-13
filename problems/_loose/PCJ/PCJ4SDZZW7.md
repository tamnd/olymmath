---
tag: PCJ4SDZZW7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1679714
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26099
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11203
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=6
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2017
    source: hf-ai-mo-aops
    label: 2017 JBMO Shortlist
  - at: jbmo-sl/2017
    source: hf-numina-olympiads
    label: JBMO-SL
  - at: jbmo
    source: hf-mathnet
    label: JBMO
---
Find all pairs of positive integers $(x,y)$ such that $2^x + 3^y$ is a perfect square.
