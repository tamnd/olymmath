---
tag: SBPBE04K2F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:R \to R$ such that $$f(x^2+f(y)-y) =(f(x))^2-f(y)$$ for all $x,y \in R$
