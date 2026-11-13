---
tag: J65RMHF1GS
kind: problem
type: answer
answer: x_i = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integer sequences of the form $ x_i, 1 \le i \le 1997$, that satisfy $ \sum_{k=1}^{1997} 2^{k-1} x_{k}^{1997}=1996\prod_{k=1}^{1997}x_k$.
