---
tag: 2EFP02FDTR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984876
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60512
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91122
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2007
    source: hf-ai-mo-aops
    label: 2007 Switzerland - Final Round
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO Finalrunde
---
Determine all positive real solutions of the following system of equations: $$ a =\ max \{ \frac{1}{b} , \frac{1}{c}\} \,\,\,\,\, b = \max \{ \frac{1}{c} , \frac{1}{d}\} \,\,\,\,\, c = \max \{ \frac{1}{d}, \frac{1}{e}\} $$ $$ d = \max \{ \frac{1}{e} , \frac{1}{f }\} \,\,\,\,\, e = \max \{ \frac{1}{f} , \frac{1}{a}\} \,\,\,\,\, f = \max \{ \frac{1}{a} , \frac{1}{b}\} $$
