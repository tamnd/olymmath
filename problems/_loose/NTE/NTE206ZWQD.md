---
tag: NTE206ZWQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n$, find all polynomials $p(x)$ of degree less than $n$ that satisfy the condition
$$
\sum_{i=0}^{n} p(i) \cdot(-1)^{i} \cdot C_{n}^{i}=0 .
$$
(IMO -28 Preliminary Problem)
