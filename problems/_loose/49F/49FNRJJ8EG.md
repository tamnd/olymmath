---
tag: 49FNRJJ8EG
kind: problem
type: answer
answer: F(p) \geq (p + k)^4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ p\in\mathbb{R}_+$ and $ k\in\mathbb{R}_+$. The polynomial $ F(x)=x^4+a_3x^3+a_2x^2+a_1x+k^4$ with real coefficients has $ 4$ negative roots. Prove that $ F(p)\geq(p+k)^4$
