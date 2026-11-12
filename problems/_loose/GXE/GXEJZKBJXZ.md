---
tag: GXEJZKBJXZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1982 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h366197
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24362
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=8753
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1982
    source: hf-ai-mo-aops
    label: 1982 IMO Longlists
---
Let $p(x)$ be a cubic polynomial with integer coefficients with leading coefficient $1$ and with one of its roots equal to the product of the other two. Show that $2p(-1)$ is a multiple of $p(1)+p(-1)-2(1+p(0)).$
