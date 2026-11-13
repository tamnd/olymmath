---
tag: EGR41RPDZC
kind: problem
type: answer
answer: f(n)=k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every integer $n \geq 2$, we denote by $f(n)$ the largest integer $m$ for which the following statement is true: "In the plane, no matter how $n$ lines are given, one can select $m$ of them such that among these $m$, any two are either parallel or any two intersect each other."

Determine the function $f(n)$!
