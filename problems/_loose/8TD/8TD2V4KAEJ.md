---
tag: 8TD2V4KAEJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1528652
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26028
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11259
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2011
    source: hf-ai-mo-aops
    label: 2011 JBMO Shortlist
  - at: jbmo-sl/2011
    source: hf-numina-olympiads
    label: JBMO-SL
  - at: jbmo-sl
    source: hf-mathnet
    label: JBMO Junior Balkan Mathematical Olympiad Shortlist
---
Find the least positive integer such that the sum of its digits is $2011$ and the product of its digits is a power of $6$ .
