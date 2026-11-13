---
tag: G9655PHFKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the functions $f(x)=xe^{x}+2x\int_0^2 |g(t)|dt-1,\ g(x)=x^2-x\int_0^1 f(t)dt$, evaluate $\int_0^2 |g(t)|dt.$
