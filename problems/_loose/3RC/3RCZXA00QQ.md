---
tag: 3RCZXA00QQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f :R \to R$ such that for all real numbers $x$ and $y$
$$f(x^3+y^3)=f(x^3)+3x^3f(x)f(y)+3f(x)(f(y))^2+y^6f(y)$$
