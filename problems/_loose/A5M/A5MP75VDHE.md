---
tag: A5MP75VDHE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h577559
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11055
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79202
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=87
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2014
    source: hf-ai-mo-aops
    label: 2014 Greece National Olympiad
  - at: gr-hms
    source: hf-mathnet
    label: Greece 31st Hellenic Mathematical Olympiad
---
Find all the polynomials with real coefficients which satisfy $ (x^2-6x+8)P(x)=(x^2+2x)P(x-2)$ for all $x\in \mathbb{R}$ .
