---
tag: 62CFFYKHME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Does there exist a pair $ (f; g)$ of strictly monotonic functions, both from $ \mathbb{N}$ to $ \mathbb{N}$, such that $$ f(g(g(n))) < g(f(n))$$ for every $ n \in\mathbb{N}$?
