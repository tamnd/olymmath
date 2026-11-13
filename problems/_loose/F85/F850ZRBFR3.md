---
tag: F850ZRBFR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f,g:[0,1]\to(0,+\infty)$ be two continuous functions such that $f$ and $\frac gf$ are increasing. Prove that
$$\int^1_0\frac{\int^x_0f(t)\text dt}{\int^x_0g(t)\text dt}\text dx\le2\int^1_0\frac{f(t)}{g(t)}\text dt.$$
