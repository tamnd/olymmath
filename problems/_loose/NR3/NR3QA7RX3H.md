---
tag: NR3QA7RX3H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80941
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of real polynomials $\mathrm{P}$ and $\mathrm{Q}$ such that

$$
P(Q(X))=(X-1)(X-2) \ldots(X-15)
$$
