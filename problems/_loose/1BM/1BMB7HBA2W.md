---
tag: 1BMB7HBA2W
kind: problem
type: answer
answer: 2x^{2}+3\cdot\ln|x|+\ln|x-1|+2\cdot\ln|x+1|+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=47703
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the indefinite integral:

$$
\int \frac{4 x^{4}+2 x^{2}-x-3}{x(x-1)(x+1)} d x
$$
