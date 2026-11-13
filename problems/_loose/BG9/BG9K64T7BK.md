---
tag: BG9K64T7BK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4069
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=151255
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0004.parquet#row=208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
  - at: hmmt
    source: hf-mathnet
    label: United States Harvard-MIT Mathematics Tournament
---
Josh takes a walk on a rectangular grid of $n$ rows and 3 columns, starting from the bottom left corner. At each step, he can either move one square to the right or simultaneously move one square to the left and one square up. In how many ways can he reach the center square of the topmost row?
