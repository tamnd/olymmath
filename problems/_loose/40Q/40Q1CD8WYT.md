---
tag: 40Q1CD8WYT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h323421
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48291
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Moldova National Olympiad
---
Determine all strictly increasing functions $ f: R\rightarrow R$ satisfying relationship $ f(x+f(y))=f(x+y)+2005$
for any real values of x and y.
