---
tag: NZMS3QA9V3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a simple connected graph with $2n$ vertices. Prove that its vertices can be colored with two colors so that if there are $k$ edges connecting vertices with different colors and $m$ edges connecting vertices with the same color, then $k-m \geq n$.
