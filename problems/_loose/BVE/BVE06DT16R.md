---
tag: BVE06DT16R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188037
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ points be given in the plane such that the distance between any three of them is at most 1. If $m$ is the smallest distance between any two of the given three points, prove that

$$
m<\frac{2(\sqrt{n}-1)}{n-1}
$$
