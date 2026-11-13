---
tag: XY4HX8NMEG
kind: problem
type: answer
answer: p_{n}=\prod_{i=0}^{n}(2^{2^{i}}+1)=2^{2^{n+1}}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the product

$$
P_{n}=\prod_{i=0}^{n}\left(2^{2 i}+1\right)
$$
