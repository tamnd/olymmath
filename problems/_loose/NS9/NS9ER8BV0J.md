---
tag: NS9ER8BV0J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85030
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{R} \rightarrow \mathbb{R}$ such that for all $x, y \in \mathbb{R}$,

$$
(x-y) f(x+y)-(x+y) f(x-y)=4 x y\left(x^{2}-y^{2}\right)
$$
