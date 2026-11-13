---
tag: PQKW6J5KW5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3120322
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59256
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251398
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2023
    source: hf-ai-mo-aops
    label: 2023 Singapore Junior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
What is the maximum number of integers that can be chosen from $1,2,\dots,99$ so that the chosen integers can be arranged in a circle with the property that the product of every pair of neighbouring integers is 3-digit number?
