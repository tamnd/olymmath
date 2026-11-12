---
tag: DQW0ZSKGK0
kind: problem
type: answer
answer: x^{2}+2\cdot\ln|x|-\frac{3}{2}\cdot\ln|x-2|+\frac{5}{2}\cdot\ln|x+2|+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=47702
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the indefinite integral:

$$
\int \frac{2 x^{4}-5 x^{2}-8 x-8}{x(x-2)(x+2)} d x
$$
