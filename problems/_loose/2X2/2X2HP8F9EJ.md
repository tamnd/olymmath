---
tag: 2X2HP8F9EJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3599775
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59426
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2025
    source: hf-ai-mo-aops
    label: 2025 Singapore Senior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Find the smallest positive $m$ so that it is possible to choose 8 vertices from a regular polygon with $m$ sides such that no three of them are the vertices of an isosceles traingle.
