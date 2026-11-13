---
tag: JYHKDZA9P4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(P, Q)$ of polynomials with integer coefficients such that for any pair $(n, m)$ of integers,

$$
P(n+Q(m))=Q(n+P(m))
$$
