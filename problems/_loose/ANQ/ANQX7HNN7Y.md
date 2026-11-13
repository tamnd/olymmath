---
tag: ANQX7HNN7Y
kind: problem
type: answer
answer: (2, 1, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integer pairs $(a, b)$ such that $\frac{2^{a+b}+1}{2^a+2^b+1}$ is an integer.

**General**
Find all positive integer triples $(t, a, b)$ such that $\frac{t^{a+b}+1}{t^a+t^b+1}$ is an integer.
