---
tag: QD069ZR9YP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h486051
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73965
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2007
    source: hf-ai-mo-aops
    label: 2007 Stanford Mathematics Tournament
---
Find $a^2+b^2$ given that $a, b$ are real and satisfy $$a=b+\frac{1}{a+\frac{1}{b+\frac{1}{a+\cdots}}}; b=a-\frac{1}{b+\frac{1}{a-\frac{1}{b+\cdots}}}$$
