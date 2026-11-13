---
tag: 4ZMEXF0D0B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $x_{0}>x_{1}>\cdots>x_{n}$, then

$$
x_{0}+\frac{1}{x_{0}-x_{1}}+\frac{1}{x_{1}-x_{2}}+\cdots+\frac{1}{x_{n-1}-x_{n}} \geq x_{n}+2 n
$$
