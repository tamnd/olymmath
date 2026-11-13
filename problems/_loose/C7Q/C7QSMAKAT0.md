---
tag: C7QSMAKAT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h377953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5696
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207841
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Slovenia National Olympiad
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
For what positive integers $n \geq 3$ does there exist a polygon with $n$ vertices (not necessarily convex) with property that each of its sides is parallel to another one of its sides?
