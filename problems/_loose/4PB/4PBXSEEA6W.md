---
tag: 4PBXSEEA6W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h49915
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40732
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237602
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2006
    source: hf-ai-mo-aops
    label: 2006 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Given finitely many points in a plane, it is known that the area of the triangle formed by any three points of the set is less than 1. Show that all points of the set lie inside or on boundary of a triangle with area less than 4.
