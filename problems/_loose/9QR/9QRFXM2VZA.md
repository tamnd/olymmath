---
tag: 9QRFXM2VZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pure decimal repeating fraction refers to a decimal $0 . a_{1} \cdots a_{k}$, which starts repeating from the first digit after the decimal point with $k$ digits. For example: $0.243243243 \cdots=\frac{9}{37}$. A mixed repeating decimal $0 . b_{1} \cdots b_{m} a_{1} \cdots a_{k}$ refers to a decimal that eventually repeats but cannot be expressed as a pure repeating decimal. For example: $0.011363636 \cdots=\frac{1}{88}$.

If a mixed repeating decimal is expressed as a reduced fraction $\frac{p}{q}$, prove that the denominator $q$ must be divisible by 2 or 5, or both.
