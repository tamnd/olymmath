---
tag: PJZJ6XPN05
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h520365
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6514
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-ai-mo-aops
    label: 2011 Harvard-MIT Mathematics Tournament
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Let $ABCD$ be a cyclic quadrilateral, and suppose that $BC = CD = 2$ . Let $I$ be the incenter of triangle $ABD$ . If $AI = 2$ as well, find the minimum value of the length of diagonal $BD$ .
