---
tag: DKXBSNV2GB
kind: problem
type: answer
answer: \frac{5x^{2}+17}{12(x^{4}-1)}+\frac{x\cdot\operatorname{arctg}x}{(x^{2}-1)^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=46795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the derivative.

$$
y=\ln \sqrt[3]{\frac{x-1}{x+1}}-\frac{1}{2}\left(\frac{1}{2}+\frac{1}{x^{2}-1}\right) \operatorname{arctan} x
$$
