---
tag: B13RAKPAYG
kind: problem
type: answer
answer: e^{2/3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the function $ f(t)=\int_0^1 (|e^x-t|+|e^{2x}-t|)dx$. Find the minimum value of $ f(t)$ for $ 1\leq t\leq e$.
