---
tag: QFCHCAF60K
kind: problem
type: answer
answer: "0.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given some disjoint intervals in the $[0,1]$ interval such that the distance between any two points in the union of these intervals is not $0.1$. Prove that the sum of the lengths of these intervals is at most $0.55$.
