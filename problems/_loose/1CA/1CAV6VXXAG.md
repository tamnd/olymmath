---
tag: 1CAV6VXXAG
kind: problem
type: answer
answer: \frac{2^{n+1}}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find $ \int_{ - 1}^1 {n\choose k}(1 + x)^{n - k}(1 - x)^k\ dx\ (k = 0,\ 1,\ 2,\ \cdots n)$.
