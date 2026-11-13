---
tag: AGVWMFZ13B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90751
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0006.parquet#row=453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A row of fifty coins with integer denominations is given, such that the sum of the denominations is odd. Alice and Bob alternate taking either coin at the left end of the row or the right end of the row, with Alice playing first. Prove that Alice can always ensure she gets more than half the money.
