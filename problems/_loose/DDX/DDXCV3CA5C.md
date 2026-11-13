---
tag: DDXCV3CA5C
kind: problem
type: answer
answer: r(x) = 60(3x^2 + 4x + 5)(x^2 + 3x + 3) r_1(x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268084
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Do there exist polynomials $p(x), q(x), r(x)$ whose coefficients are positive integers such that $p(x) = (x^{2}-3x+3) q(x)$ and $q(x) = (\frac{x^{2}}{20}-\frac{x}{15}+\frac{1}{12}) r(x)$?
