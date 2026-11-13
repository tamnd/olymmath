---
tag: X9FK9CVE24
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Assume that $a, b,$ and $c$ are positive real numbers for which $(a+b)(a+c)(b+c) = 1$. Prove that $ab+bc+ca \leq\frac{3 }{4}.$
