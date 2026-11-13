---
tag: 6KWBSQNYRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points on a plane, no three of which are collinear. We mark triangles by choosing their vertices from the given points, and no two of them share a side. Prove that we can mark at least

$\frac{1}{9}\binom{n}{2}$ triangles, but we cannot mark more than $\frac{1}{3}\binom{n}{2}$.
