---
tag: QCY1MX7YJG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A quadratic polynomial $f(x)$ is called sparse if its degree is exactly 2 , if it has integer coefficients, and if there exists a nonzero polynomial $g(x)$ with integer coefficients such that $f(x) g(x)$ has degree at most 3 and $f(x) g(x)$ has at most two nonzero coefficients. Find the number of sparse quadratics whose coefficients lie between 0 and 10, inclusive.
