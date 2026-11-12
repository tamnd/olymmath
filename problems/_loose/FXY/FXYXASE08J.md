---
tag: FXYXASE08J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove Leibniz's formula for the differentiation of the product of two functions $ f $ and $ g $:

$$
D^{N}(f g)=\sum_{n=0}^{N} C_{N}^{n}\left(D^{n} f\right)\left(D^{N-n} g\right)
$$
