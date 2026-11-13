---
tag: BB2VEFGNJT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984847
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60499
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2006
    source: hf-ai-mo-aops
    label: 2006 Switzerland - Final Round
---
Find all functions $f : R \to R$ such that for all $x, y \in R$ holds $$ yf(2x) - xf(2y) = 8xy(x^2 - y^2). $$
