---
tag: 4SAT3ZSD0C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h395068
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42247
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238832
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=54
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2007
    source: hf-ai-mo-aops
    label: 2007 India IMO Training Camp
  - at: in-tst/2007
    source: hf-mathnet
    label: India Indija TS 2007
---
Find all integer solutions $(x,y)$ of the equation $y^2=x^3-p^2x,$ where $p$ is a prime such that $p\equiv 3 \mod 4.$
