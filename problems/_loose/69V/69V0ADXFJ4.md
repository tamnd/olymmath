---
tag: 69V0ADXFJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1246130
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26067
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2015
    source: hf-ai-mo-aops
    label: 2015 JBMO Shortlist
  - at: jbmo
    source: hf-mathnet
    label: JBMO Junior Balkan Mathematical Olympiad
---
Check if there exists positive integers $ a, b$ and prime number $p$ such that $a^3-b^3=4p^2$
