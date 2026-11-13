---
tag: K4CAYEGPR0
kind: problem
type: answer
answer: f(z)=\frac{1}{2}-z
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f$ from $\mathbb{R}$ to $\mathbb{R}$ such that, for all real numbers $x, y$,

$$
f(x-f(y))=1-x-y
$$
