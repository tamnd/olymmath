---
tag: P0DCC7EF5S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $p(x)$ such that for all reals $a, b$ and $c$, with $a+b+c=0$, satisfies

$$p(a^3)+p(b^3)+p(c^3)=3p(abc)$$
