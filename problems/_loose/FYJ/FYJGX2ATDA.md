---
tag: FYJGX2ATDA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h404439
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6608
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208731
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=36
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2011
    source: hf-ai-mo-aops
    label: 2011 Iran MO (2nd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
find the smallest natural number $n$ such that there exists $n$ real numbers in the interval $(-1,1)$ such that their sum equals zero and the sum of their squares equals $20$ .
