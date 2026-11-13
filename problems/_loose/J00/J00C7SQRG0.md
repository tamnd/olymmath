---
tag: J00C7SQRG0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that
$$\sum_{k=0}^\infty x^k\frac{1+x^{2k+2}}{(1-x^{2k+2})^2}=\sum_{k=0}^\infty(-1)^k\frac{x^k}{(1-x^{k+1})^2}$$for all $x\in(-1,1)$.
