---
tag: WZ28M0H4CM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250680
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Tarik wants to choose some distinct numbers from the set $S = \{2,...,111\}$ in such a way that each of the chosen numbers cannot be written as the product of two other distinct chosen numbers. What is the maximum number of numbers Tarik can choose ?
