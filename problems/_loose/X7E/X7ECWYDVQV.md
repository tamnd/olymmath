---
tag: X7ECWYDVQV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a polynomial $f$ with positive integer coefficients \textit{triangle-compatible} if any three coefficients of $f$ satisfy the triangle inequality. For instance, $3x^3 + 4x^2 + 6x + 5$ is triangle-compatible, but $3x^3 + 3x^2 + 6x + 5$ is not. Given that $f$ is a degree $20$ triangle-compatible polynomial with $-20$ as a root, what is the least possible value of $f(1)$?
