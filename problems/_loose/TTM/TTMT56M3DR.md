---
tag: TTMT56M3DR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Morocco National Olympiad
    url: https://artofproblemsolving.com/community/c6h403685
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6836
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208965
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=24
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Morocco National Olympiad
  - at: sa-samc
    source: hf-mathnet
    label: Saudi Arabia SAMC
---
Compute the sum
$$S=1+2+3-4-5+6+7+8-9-10+\dots-2010$$
where every three consecutive $+$ are followed by two $-$ .
