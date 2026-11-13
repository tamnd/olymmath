---
tag: HRWTXPN1NA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83301
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $f: \mathbb{N}^{*} \rightarrow \mathbb{N}^{*}$ such that $f(n+1)>f(n)$ and

$$
f(f(n))=3 n
$$
