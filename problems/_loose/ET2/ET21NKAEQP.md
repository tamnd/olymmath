---
tag: ET21NKAEQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2790121
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203897
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2022
    source: hf-ai-mo-aops
    label: 2022 Greece Junior Math Olympiad
  - at: gr-hms
    source: hf-mathnet
    label: Greece 39th Hellenic Mathematical Olympiad
---
Find all couples of non-zero integers $(x,y)$ such that, $x^2+y^2$ is a common divisor of $x^5+y$ and $y^5+x$ .
