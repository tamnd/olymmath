---
tag: D8DF1H9ECA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Z$ denote the set of all integers. Find all functions $f: Z \rightarrow Z$, such that for any integers $x, y$ the following holds:

$$
f(x+f(y))=f(x)-y
$$
