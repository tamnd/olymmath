---
tag: JS3BXPMP8H
kind: problem
type: answer
answer: f(x)=-x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ that for all real $x$ satisfy the relations

$$
\underbrace{f(f(f \ldots f}_{13}(x) \ldots))=-x, \underbrace{f(f(f \ldots f}_{8}(x) \ldots))=x
$$
