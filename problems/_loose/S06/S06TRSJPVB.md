---
tag: S06TRSJPVB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90445
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=71
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each of Alice, Bob, and Carol is either a consistent truth-teller or a consistent liar. Alice states: "At least one of Bob or Carol is a truth-teller." Bob states: "Alice and Carol are both truth-tellers." Carol states: "If Alice is a truth-teller, so too is Bob." Must they all be truth-tellers?
