---
tag: ZGRAVB71G4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2994788
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60553
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252631
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2015
    source: hf-ai-mo-aops
    label: 2015 Switzerland - Final Round
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO - Finalrunde
---
Find the largest natural number $n$ such that for all real numbers $a, b, c, d$ the following holds: $$ (n + 2)\sqrt{a^2 + b^2} + (n + 1)\sqrt{a^2 + c^2} + (n + 1)\sqrt{a^2 + d^2} \ge n(a + b + c + d) $$
