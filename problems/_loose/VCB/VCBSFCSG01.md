---
tag: VCBSFCSG01
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive real numbers $x, y, z>1$ satisfy $x^{\log _{y} x} \cdot y^{\log _{z} y} \cdot z^{\log _{x} z}=10$, find the maximum value of $x y z$.
