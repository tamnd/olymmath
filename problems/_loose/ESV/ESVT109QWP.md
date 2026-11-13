---
tag: ESVT109QWP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984822
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60497
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91149
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2005
    source: hf-ai-mo-aops
    label: 2005 Switzerland - Final Round
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO Finalrunde
---
Let $a, b, c$ be positive real numbers with $abc = 1$ . Find all possible values of the expression $$ \frac{1 + a}{1 + a + ab}+\frac{1 + b}{1 + b + bc}+\frac{1 + c}{1 + c + ca} $$ can take.
