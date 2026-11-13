---
tag: 4AGAGG0PB6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a non-zero natural number and let $f:[0,1] \rightarrow \mathbb{R}$ be an integrable function. Show that there exists a point $c$ in the closed interval $[0,1-1 / n]$, such that

$$
\int_{c}^{c+\frac{1}{n}} f(x) \mathrm{d} x=0 \text { or } \int_{0}^{c} f(x) \mathrm{d} x=\int_{c+\frac{1}{n}}^{1} f(x) \mathrm{d} x
$$
