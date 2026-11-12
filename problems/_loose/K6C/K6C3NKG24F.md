---
tag: K6C3NKG24F
kind: problem
type: answer
answer: x^2-\ln|x|+\frac{1}{9}\ln|x-4|-\frac{1}{9}\ln|x+5|+C
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=47705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculate the indefinite integral:

$$
\int \frac{2 x^{4}+2 x^{3}-41 x^{2}+20}{x(x-4)(x+5)} d x
$$
