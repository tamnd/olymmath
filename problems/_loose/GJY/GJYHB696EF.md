---
tag: GJYHB696EF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Austrian Junior Regional Competition
    url: https://artofproblemsolving.com/community/c6h3285841
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29494
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14598
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo-beg/2023
    source: hf-ai-mo-aops
    label: 2023 Austrian Junior Regional Competition
---
Let $x, y, z$ be nonzero real numbers with $$ \frac{x + y}{z}=\frac{y + z}{x}=\frac{z + x}{y}. $$ Determine all possible values of $$ \frac{(x + y)(y + z)(z + x)}{xyz}. $$ *(Walther Janous)*
