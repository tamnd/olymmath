---
tag: FJRJFEDK76
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The device must transform the polynomial $2020 x^{4}+x+1$ into the polynomial $x^{4}+2020 x+1$ by changing its coefficients in several steps, ensuring that at no step does a polynomial with integer roots result. Can this device perform the transformations if it can only do one of two operations in a single step: 1) change (increase or decrease) by 1 any one (any on each step) coefficient of the polynomial; 2) change simultaneously by one unit any two (any on each step) coefficients of the polynomial?
