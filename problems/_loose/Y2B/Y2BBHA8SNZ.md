---
tag: Y2BBHA8SNZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that for any pair of functions $f(x), g(x)$ defined on the closed interval $[0,1]$, there exist $0 \leq x \leq 1$ and $0 \leq y \leq 1$ such that

$$
|f(x)+g(y)-x y| \geq \frac{1}{4}
$$
