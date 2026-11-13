---
tag: 1FSNR1H9ZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Danube Mathematical Competition
    url: https://artofproblemsolving.com/community/c6h1880126
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22632
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223780
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: danube/2013
    source: hf-ai-mo-aops
    label: 2013 Danube Mathematical Competition
  - at: danube
    source: hf-mathnet
    label: Romania The Danube Mathematical Competition
---
Determine the natural numbers $m,n$ such as $85^m-n^4=4$
