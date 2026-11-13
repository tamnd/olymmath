---
tag: DXVC05YWTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3387934
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37462
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2009
    source: hf-ai-mo-aops
    label: 2009 Cuba MO
  - at: si-mo/2008
    source: hf-mathnet
    label: Slovenia Slovenija 2008
---
Determine all the functions $f : R \to R$ such that: $$ x + f(xf(y)) = f(y) + yf(x) $$ for all $x, y \in R$ .
