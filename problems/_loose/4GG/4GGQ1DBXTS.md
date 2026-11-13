---
tag: 4GGQ1DBXTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90261
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=35
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be integers such that

$$
|a+b|>|1+a b| \text {. }
$$

Prove that $a b=0$.
