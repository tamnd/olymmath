---
tag: 8MHSZH276S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984796
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60493
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251742
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=71
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2005
    source: hf-ai-mo-aops
    label: 2005 Switzerland - Final Round
  - at: za-samo
    source: hf-mathnet
    label: South Africa South-Afrika 2011-2013
---
Find all functions $f : R^+ \to R^+$ such that for all $x, y > 0$ $$ f(yf(x))(x + y) = x^2(f(x) + f(y)). $$
