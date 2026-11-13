---
tag: WY5E8TBJTA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:R\to R$ such that for all real $x,y$ with $y\ne 0$ $$f(x-f(x/y))=xf(1-f(1/y))$$ and
a) $f(1-f(1))\ne 0$
b) $ f(1-f(1))= 0$

S. Kuzmich, I.Voronovich
