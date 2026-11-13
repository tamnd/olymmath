---
tag: 2RAJBNRKSW
kind: problem
type: answer
answer: f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the continuous function $f(x)$ such that the following equation holds for any real number $x$.

$$\int_0^x \sin t \cdot f(x-t)dt=f(x)-\sin x.$$

*1977 Keio University entrance exam/Medicine*
