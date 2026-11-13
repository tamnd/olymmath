---
tag: GPR8AM7GG9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Austrian MO Regional Competition
    url: https://artofproblemsolving.com/community/c6h3285832
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30631
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147074
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo-reg/2023
    source: hf-ai-mo-aops
    label: 2023 Austrian MO Regional Competition
---
Determine all pairs $(x, y)$ of positive integers such that for $d = gcd(x, y)$ the equation $$ xyd = x + y + d^2 $$ holds.

*(Walther Janous)*
