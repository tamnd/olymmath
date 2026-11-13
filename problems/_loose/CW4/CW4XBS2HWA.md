---
tag: CW4XBS2HWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90472
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 3, 999,999 cities in Antarctica, and some pairs of them are connected by roads. It is known that, given any two cities, there is a sequence of roads leading from one to the other. Prove that the cities can be divided into 1999 groups (of 2001 cities each) such that, given any two cities in the same group, it is possible to get from one to the other using at most 4000 roads.
