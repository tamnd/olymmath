---
tag: J4CNMBSER4
kind: problem
type: answer
answer: \varphi(x)=1-x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the integral equation

$$
\int_{0}^{x} e^{x-t} \varphi(t) d t=x
$$
