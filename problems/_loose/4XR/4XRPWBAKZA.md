---
tag: 4XRPWBAKZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Every number $n \in N$ with an even number of decimal digits can be split "in the middle," resulting in two numbers $n_{1} ; n_{2} \in N$.

Determine all even numbers $n$ that satisfy the condition $n=\left(n_{1}+2\right)\left(n_{2}+2\right)$!
