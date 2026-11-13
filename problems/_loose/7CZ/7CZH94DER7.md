---
tag: 7CZH94DER7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286704
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44765
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241003
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1997
    source: hf-ai-mo-aops
    label: 1997 Irish Math Olympiad
---
Find all polynomials $ p(x)$ satisfying the equation: $ (x-16)p(2x)=16(x-1)p(x)$ for all $ x$ .
