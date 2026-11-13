---
tag: SNJ1G9MGQ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h486943
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6501
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4089
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151273
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=140
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
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
A classroom has $30$ students and $30$ desks arranged in $5$ rows of $6$ . If the class has $15$ boys and $15$ girls, in how many ways can the students be placed in the chairs such that no boy is sitting in front of, behind, or next to another boy, and no girl is sitting in front of, behind, or next to another girl?
