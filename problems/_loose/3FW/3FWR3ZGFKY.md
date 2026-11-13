---
tag: 3FWR3ZGFKY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3402556
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37492
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=10
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2012
    source: hf-ai-mo-aops
    label: 2012 Cuba MO
  - at: ar-oma
    source: hf-mathnet
    label: Argentina National Olympiad of Argentina
---
There are $1000$ balls of dough $0.38$ and $5000$ balls of dough $0.038$ that must be packed in boxes. A box contains a collection of balls whose total mass is at most $1$ . Find the smallest number of boxes that they are needed.
