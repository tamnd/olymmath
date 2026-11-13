---
tag: JA3KJKBKCZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233819
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $2017$ positive numbers $x_1,\dots,x_{2017}$ such that
$$\sum_{i=1}^{2017}x_i=\sum_{i=1}^{2017}\frac{1}{x_i}=2018,$$
compute the maximum possible value of $x_1+\frac{1}{x_1}$.
