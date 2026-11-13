---
tag: HDKZE7N2T5
kind: problem
type: answer
answer: x(t) = 2 - e^{-t}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find continuous functions $x(t),\ y(t)$ such that

$\ \ \ \ \ \ \ \ \ x(t)=1+\int_{0}^{t}e^{-2(t-s)}x(s)ds$

$\ \ \ \ \ \ \ \ \ y(t)=\int_{0}^{t}e^{-2(t-s)}\{2x(s)+3y(s)\}ds$
