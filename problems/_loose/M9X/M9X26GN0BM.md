---
tag: M9X26GN0BM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h520354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6503
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4073
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151268
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=279
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
Let $a \star b = ab + a + b$ for all integers $a$ and $b$ . Evaluate $1 \star ( 2 \star ( 3 \star (4 \star \ldots ( 99 \star 100 ) \ldots )))$ .
