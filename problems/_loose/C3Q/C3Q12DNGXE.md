---
tag: C3Q12DNGXE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the continuous function $f(x)$ such that :
$$\int_0^x f(t)\left(\int_0^t f(t)dt\right)dt=f(x)+\frac 12$$
