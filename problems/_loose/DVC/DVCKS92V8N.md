---
tag: DVCKS92V8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 IMAC Arhimede
    url: https://artofproblemsolving.com/community/c6h1834058
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3551
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205744
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imac/2009
    source: hf-ai-mo-aops
    label: 2009 IMAC Arhimede
---
Let $m,n \in Z, m\ne n, m \ne 0, n \ne 0$ .
Find all $f: Z \to R$ such that $f(mx+ny)=mf(x)+nf(y)$ for all $x,y \in Z$ .
