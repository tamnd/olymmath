---
tag: HFADJ1MX2X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h1634489
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16649
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2018
    source: hf-ai-mo-aops
    label: 2018 Iran MO (2nd Round)
---
Find all functions $f:\Bbb {R} \rightarrow \Bbb {R} $ such that: $$ f(x+y)f(x^2-xy+y^2)=x^3+y^3 $$ for all reals $x, y $ .
