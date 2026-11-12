---
tag: REXWW4T3VY
kind: problem
type: answer
answer: \varphi(x)=xe^{x^{3}/3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the integral equation

$$
\varphi(x)=x+\int_{0}^{x} x t \varphi(t) d t
$$
