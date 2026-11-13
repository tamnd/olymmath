---
tag: H2FKFKD6YW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90650
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The manager of Chez Gastropod wants to write a menu consisting of 15 dishes. A "meal" is defined to be a subset of this menu (possibly empty), but some meals are legal and others are not. The manager may choose which meals are legal, but there is a requirement that the intersection of any two legal meals should still be legal. He wants there to be exactly 2001 legal meals. Can he do it?
