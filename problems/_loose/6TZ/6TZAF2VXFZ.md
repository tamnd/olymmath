---
tag: 6TZAF2VXFZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h607953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35298
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=136337
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2006
    source: hf-ai-mo-aops
    label: 2006 China Second Round Olympiad
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Find the number of real solutions to the equation $(x^{2006}+1)(1+x^2+x^4+\ldots +x^{2004})=2006x^{2005}$
