---
tag: KMRHRNEHGF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984867
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60506
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91123
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=122
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
Let $a, b, c$ be three integers such that $a + b + c$ is divisible by $13$ . Prove that $$ a^{2007}+b^{2007}+c^{2007}+2 \cdot 2007abc $$ is divisible by $13$ .
