---
tag: 49Z9XDVH1N
kind: problem
type: answer
answer: \ln(2\ln(2)) < p < 2\ln(2) - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213953
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive constant $p$, let $f(x)=\int_{-1}^x \{p-\ln (1+|t|)\}\ dt.$

(1) Find the extreme value of $f(x)$.

(2) Find the range of $p$ such that the curve $y=f(x)$ has two point of intersections with the positive part of the $x$ axis.
