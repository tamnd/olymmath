---
tag: VW3N06VVFW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given integers $0<a_{1}<a_{2}<\ldots<a_{101}<5050$, show that you can always choose four different $a_{k}, a_{l}, a_{m}, a_{n}$ with

$$
5050 \mid\left(a_{k}+a_{l}-a_{m}-a_{n}\right)
$$
