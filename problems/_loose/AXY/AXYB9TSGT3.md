---
tag: AXYB9TSGT3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241357
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb{R}\to \mathbb{R}$ so that for any reals $x,y$ the following holds:
$$f(x\cdot f(x+y))+f(f(y)\cdot f(x+y))=(x+y)^2$$
