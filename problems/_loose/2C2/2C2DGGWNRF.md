---
tag: 2C2DGGWNRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb{R}\to \mathbb{R}$ such that for all $x, y\in \mathbb{R}$ the following holds:
$$f(x)+f(y)=f(xy)+f(f(x)+f(y))$$
