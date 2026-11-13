---
tag: DKYCFG1676
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2995354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29778
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229499
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=16
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2010
    source: hf-ai-mo-aops
    label: 2010 Argentina National Olympiad
  - at: ar-oma
    source: hf-mathnet
    label: Argentina National Olympiad of Argentina
---
Given several integers, the allowed operation is to replace two of them by their non-negative difference. The operation is repeated until only one number remains. If the initial numbers are $1, 2, … , 2010$ , what can be the last remaining number?
